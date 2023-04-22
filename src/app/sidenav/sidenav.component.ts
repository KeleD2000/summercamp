import {Component, Output, Input, EventEmitter } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  loggedInUser?: firebase.default.User | null;

  constructor(private authService: AuthService, private router: Router){}

  ngOnInit() {
    this.authService.isUserLoggedIn().subscribe(
      (user) => {
        this.loggedInUser = user;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  logout() {
    this.authService
      .logout()
      .then(() => {
        console.log('Sikeres kijelentkezés');
      })
      .catch((err) => {
        console.log(err);
      });
  }

}
