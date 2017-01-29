import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthService } from './auth.service';
import { GuardService } from './guard.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

import { AppRoutingModule } from './app.routing.module';
import {  } from './';

import {
  AngularFireModule,
  AuthMethods,
  AuthProviders
} from "angularfire2";
import { HomeComponent } from './home/home.component';

const firebaseConfig = {
  apiKey: "AIzaSyAcKbGMG8Ql2_L0zUnq0EoewJ9J7DrVcqs",
  authDomain: "progressivewebappexemple.firebaseapp.com",
  databaseURL: "https://progressivewebappexemple.firebaseio.com",
  storageBucket: "progressivewebappexemple.appspot.com",
  messagingSenderId: "1088441831164"
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule
  ],
  providers: [AuthService, GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
