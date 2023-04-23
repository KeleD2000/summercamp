import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CampsCrudService } from '../camps-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-modify',
  templateUrl: './reservation-modify.component.html',
  styleUrls: ['./reservation-modify.component.css']
})
export class ReservationModifyComponent {
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

