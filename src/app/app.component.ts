import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  title = 'summercampuse';

  @Output() sidenavToggle = new EventEmitter();
  @Output() logoutEvent = new EventEmitter();
  loggedInUser?: firebase.default.User | null;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.isUserLoggedIn().subscribe(
      (user) => {
        this.loggedInUser = user;
        localStorage.setItem('user', JSON.stringify(this.loggedInUser));
      },
      (err) => {
        console.log(err);
        localStorage.setItem('user', JSON.stringify('null'));
      }
    );
  }

  onToggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle();
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
