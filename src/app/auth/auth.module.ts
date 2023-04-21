import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { StartPageComponent } from './start-page/start-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import  {MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout'; 
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    StartPageComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
    
  ]
})
export class AuthModule { }
