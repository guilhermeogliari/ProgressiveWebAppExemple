import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth, AuthProviders, AuthMethods } from 'angularfire2';

import { User } from './user/user';

@Injectable()
export class AuthService {

  user: User = new User();

  constructor(private af: AngularFireAuth, private router: Router) {
    this.af.subscribe(user => {
      if (user) {
        this.user.displayName = user.auth.displayName;
        this.user.email = user.auth.email;
        this.user.photoURL = user.auth.photoURL;
        this.user.uid = user.auth.uid;
        this.user.logued = true;
      } else {
        this.user.logued = false;
      }
    });
  }

  isLogued() {
    return this.user.logued;
  }

  singIn(provider) {
    this.af.login({
      provider: provider,
      method: AuthMethods.Popup
    }).then((success) => {
      this.router.navigate(['/home']);
    }).catch((err) => {
      console.log(err);
    });
  }

  loginEmail(email, password) {
    this.af.login({
      email: email,
      password: password
    }).then((success) => {
      this.router.navigate(['/home']);
    }).catch((err) => {
      console.log(err);
    });
  }

  loginGoogle() {
    this.singIn(AuthProviders.Google);
  }

  loginFacebook() {
    this.singIn(AuthProviders.Facebook);
  }

  logout() {
    this.router.navigate(['/login']);
    this.af.logout();
  }

}
