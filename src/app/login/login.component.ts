import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GuardService } from './../guard.service';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private guard:GuardService,private router:Router) {
    if(this.guard.canActivate()){
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() { }

}
