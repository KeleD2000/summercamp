import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CampsCrudService } from '../camps-crud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservationForm!: FormGroup

  constructor(private campsCrudService: CampsCrudService, private router: Router){
    this.reservationForm = new FormGroup({
      lastname: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      sex: new FormControl('', Validators.required),
      identitycard: new FormControl('', Validators.required),
      campname: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required)
    });

  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.campsCrudService.createReservation(this.reservationForm.value);
    this.router.navigate(['homem/reservationhandler'])
  }

}
