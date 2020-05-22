// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  server: "http://localhost:8080",
  constantSalt: "eFA33n8lvP5yOBWsKQ",
  firebase: {
    apiKey: "AIzaSyDxrUeq8MSdE9Rr4juycCmnGahWMmDzfA4",
    authDomain: "notiki-dev.firebaseapp.com",
    databaseURL: "https://notiki-dev.firebaseio.com",
    projectId: "notiki-dev",
    storageBucket: "notiki-dev.appspot.com",
    messagingSenderId: "260249045003",
    appId: "1:260249045003:web:1dfb6f44bd2d2019fd1f0e",
    measurementId: "G-KV0B6GKQ8Y"
  },

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
