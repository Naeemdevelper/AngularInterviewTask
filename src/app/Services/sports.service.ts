import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SportsService {
   urlSport=environment.apiSport;
   urlLeague=environment.apiLeague;
   urlTeams=environment.apiTeams;
  constructor(private http:HttpClient) { }

getSports(){
  return this.http.get(this.urlSport)
}
getLeague(){
  return this.http.get(this.urlLeague)
}
getTeams(id:any){
  return this.http.get(this.urlTeams+ `?id=${id}`)
}

}
