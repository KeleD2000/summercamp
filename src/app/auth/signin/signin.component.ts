import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent{

  loginForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router){
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email],),
        pw: new FormControl('', [Validators.required, Validators.minLength(8)])

      }
    )
  }

  onLogin(){
    this.authService.login(this.loginForm.get('email')?.value, this.loginForm.get('pw')?.value).then((cr) => {
      this.router.navigate(['homem/home']);
    
    }).catch((err) => {
      console.log(err);
    });
  }

}
