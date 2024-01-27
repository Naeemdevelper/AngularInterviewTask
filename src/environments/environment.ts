// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiSport:'https://www.thesportsdb.com/api/v1/json/40130162/all_sports.php',
  apiLeague:'https://www.thesportsdb.com/api/v1/json/40130162/all_leagues.php',
  apiTeams:'https://www.thesportsdb.com/api/v1/json/40130162/lookup_all_teams.php'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
