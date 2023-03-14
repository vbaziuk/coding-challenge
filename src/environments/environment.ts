// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/**
 * If you're running in development mode, it will run the function at least twice. 
 * since in development mode it does a check, changes, then rechecks to verify, 
 * where production mode only does the first check, assuming you've done your
 * quality assurance and resolved any values the get changed post checking.
 */
export const environment = {
  production: false
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
