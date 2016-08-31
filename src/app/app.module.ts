import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import * as firebase from 'firebase';

/*
  Make sure your DB rules are PUBLIC(for tests)
  Default rules require authentication!
  https://firebase.google.com/docs/database/security/quickstart
*/

/* 
-------
 FILL the below fields with your Firebase details
-------
*/
const firebaseConfig = {
  apiKey: "your settings",
  authDomain: "your",
  databaseURL: "your",
  storageBucket: "your"
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
