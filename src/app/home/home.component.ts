import { Component, OnInit } from '@angular/core';
import { SportsService } from '../Services/sports.service';
import { forkJoin } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sportList:any=[]
  leagueList:any=[]
  filterLeagueList:any=[]
  teamsList:any=[]
  limit = 5;
  offset = 0;
  hasMore = true;
  teamsListFilters:any=[]
  loginForm:FormGroup  
  isSubmitted=false
  constructor(private sportService:SportsService,private fb:FormBuilder) {
    this.loginForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
   this.fetchAllSports()
   this.fetchLeagues()

  }

  fetchAllSports(){
    this.sportService.getSports().subscribe((res:any)=>{
      this.sportList=res['sports']
    })
  }
  fetchLeagues(){
    this.sportService.getLeague().subscribe((res:any)=>{
      this.leagueList=res['leagues']

    })
  }

  fetchTeams(id:any){

    this.sportService.getTeams(id).subscribe((res:any)=>{
      this.teamsList=res['teams']
      this.teamsListFilters.push(res['teams'])
    })
  }



selectSport(sportName: string) {
  this.filterLeagueList = this.leagueList.filter((league: any) => league.strSport === sportName);
  this.offset = 0;
  this.hasMore = this.leagueList.length > this.limit;
 this.filterLeagueList.slice(this.offset, this.offset + this.limit).forEach((element:any) => {
  this.fetchTeams(element.idLeague)
   
});

}

loadMore() {
  this.offset += this.limit;
  this.hasMore = this.offset < this.leagueList.length;
  this.filterLeagueList.slice(0, this.offset + this.limit).forEach((element:any) => {
    this.fetchTeams(element.idLeague)
  });
}

submitForm(){
  this.isSubmitted=true
  if(this.loginForm.valid){
    console.log(this.loginForm.value)
  }
 
}
}
