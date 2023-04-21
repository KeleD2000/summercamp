import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  registerForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router){
    this.registerForm = new FormGroup({
      
      email: new FormControl('', [Validators.required],),
      pw: new FormControl('', [Validators.required])

    });
  }

  onSignup(){
    this.authService.signup(this.registerForm.get('email')?.value, this.registerForm.get('pw')?.value).then((cr) => {
      console.log(cr);
    
    }).catch((err) => {
      console.log(err);
    });
  }

}
