import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ErroAuthEn } from '../ErrorAuthEn';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{

  loggedInUser?: firebase.default.User | null;

  public showPassword: boolean = false;

  loginForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router, private angularFireAuth: AngularFireAuth){
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email],),
        pw: new FormControl('', [Validators.required, Validators.minLength(8)])

      }
    )
    }

    ngOnInit(){
      this.angularFireAuth.authState.subscribe(user =>{
        if(user){
          this.router.navigate(['homem/home']);
        }
      })
    }

  onLogin(){
    this.authService.login(this.loginForm.get('email')?.value, this.loginForm.get('pw')?.value).then((cr) => {
      this.router.navigate(['homem/home']);
    
    }).catch((err) => {
      alert(ErroAuthEn.convertMessage(err['code']));
    });
  }

  togglePasswordVisbility(){
    this.showPassword = !this.showPassword;
  }

}
