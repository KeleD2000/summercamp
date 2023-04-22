import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { CampsComponent } from './camps/camps.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {MatButtonModule} from '@angular/material/button';
import { ReservationComponent } from './reservation/reservation.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ReservationHandlerComponent } from './reservation-handler/reservation-handler.component';
import { MatTableModule } from '@angular/material/table';




@NgModule({
  declarations: [
    HomeComponent,
    CampsComponent,
    ReservationComponent,
    ReservationHandlerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatExpansionModule,
    AngularFirestoreModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule
    
  ]
})
export class HomeModule { }
