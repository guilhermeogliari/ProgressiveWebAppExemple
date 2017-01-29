import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Rx';

import { } from './auth.service.spec';

@Injectable()
export class GuardService implements CanActivate{

  constructor(private auth: AngularFireAuth, private router: Router) { }

  canActivate(): Observable<boolean> | boolean {
    return this.auth.map((auth) => {
      if (auth) {
        return true;
      }
      this.router.navigateByUrl('/login');
      return false;
    }).first();
  }

}
