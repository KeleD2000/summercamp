import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [
    {path:'startpage', component:StartPageComponent},
    {path:'signin', component:SigninComponent},
    {path:'signup', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
