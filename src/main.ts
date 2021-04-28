import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { defineCustomElements } from '@ionic/pwa-elements/loader';
import firebase from 'firebase';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));

// Call the element loader after the platform has been bootstrapped
// Some Capacitor plugins, including the Camera API, provide
// the web - based functionality and UI via the Ionic PWA Elements library.
// https://github.com/ionic-team/pwa-elements
defineCustomElements(window);

// Initialize Firebase
firebase.initializeApp(environment.firebaseConfig);
