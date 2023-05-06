import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CampsCrudService } from '../camps-crud.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Reservation } from 'src/app/models/Reservation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent {
  reservationForm!: FormGroup;

  constructor(
    private campsCrudService: CampsCrudService,
    private router: Router,
    private authService: AuthService
  ) {
    this.reservationForm = new FormGroup({
      lastname: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      sex: new FormControl('', Validators.required),
      identitycard: new FormControl('', Validators.required),
      campname: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    const user = JSON.parse(localStorage.getItem('user') as string);
    if (user) {
      const res: Reservation = {
        user_id: user.uid,
        lastname: this.reservationForm.get('lastname')?.value as string,
        firstname: this.reservationForm.get('firstname')?.value as string,
        age: this.reservationForm.get('age')?.value as number,
        sex: this.reservationForm.get('sex')?.value as string,
        identitycard: this.reservationForm.get('identitycard')?.value as string,
        campname: this.reservationForm.get('campname')?.value as string,
        date: this.reservationForm.get('date')?.value as string,
      };

      this.campsCrudService
        .createReservation(res)
        .then((_) => {
          this.router.navigate(['homem/reservationhandler']);
          console.log('Sikeres létrehozása.');
        })
        .catch((error) => {
          console.log(error);
        });

      console.log('create');
    }
  }
}
