import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './auth/start-page/start-page.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { NotFoundComponent } from './auth/not-found/not-found.component';


const routes: Routes = [
  {path:'', component: StartPageComponent},
  {path:'auth', loadChildren: () => AuthModule},
  {path:'homem', loadChildren: () => HomeModule},
  {path:'**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
