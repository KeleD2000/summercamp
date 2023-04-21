import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './auth/start-page/start-page.component';
import { AuthModule } from './auth/auth.module';


const routes: Routes = [
  {path:'', component: StartPageComponent},
  {path:'auth', loadChildren: () => AuthModule}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
