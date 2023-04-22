import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CampsCrudService } from '../camps-crud.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservationForm!: FormGroup

  constructor(private campsCrudService: CampsCrudService, private router: Router){
    this.reservationForm = new FormGroup({
      lastname: new FormControl(''),
      firstname: new FormControl(''),
      age: new FormControl(''),
      sex: new FormControl(''),
      identitycard: new FormControl(''),
      campname: new FormControl(''),
      date: new FormControl('')
    });

  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.campsCrudService.createReservation(this.reservationForm.value);
    this.router.navigate(['homem/reservationhandler'])
  }

}
