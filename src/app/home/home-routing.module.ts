import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CampsComponent } from './camps/camps.component';
import { AuthGuard } from '../auth/auth.guard';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationHandlerComponent } from './reservation-handler/reservation-handler.component';
import { ReservationModifyComponent } from './reservation-modify/reservation-modify.component';

const routes: Routes = [
  {path:'home', component:HomeComponent, canActivate:[AuthGuard]},
  {path:'camps', component: CampsComponent, canActivate:[AuthGuard]},
  {path:'reservation/:campname', component:ReservationComponent, canActivate:[AuthGuard]},
  {path:'reservationhandler', component: ReservationHandlerComponent, canActivate:[AuthGuard]},
  {path:'reservationhandler/reservation-modify', component: ReservationModifyComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
