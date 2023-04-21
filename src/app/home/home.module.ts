import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { CampsComponent } from './camps/camps.component';
import { MatExpansionModule } from '@angular/material/expansion';



@NgModule({
  declarations: [
    HomeComponent,
    CampsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatExpansionModule
    
  ]
})
export class HomeModule { }
