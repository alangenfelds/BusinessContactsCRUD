import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyA7LYkRcx6xnLg2_XLlXpIRvUNIyX397Ns',
  authDomain: 'business-contacts-15de0.firebaseapp.com',
  databaseURL: 'https://business-contacts-15de0.firebaseio.com',
  storageBucket: 'business-contacts-15de0.appspot.com',
  messagingSenderId: '581408699152'
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
