import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CampsCrudService } from '../camps-crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/models/Reservation';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-reservation-modify',
  templateUrl: './reservation-modify.component.html',
  styleUrls: ['./reservation-modify.component.css']
})
export class ReservationModifyComponent implements OnInit{
  reservationForm!: FormGroup

  constructor(private authService: AuthService, private campsCrudService: CampsCrudService, private router: Router, private route: ActivatedRoute){
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
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.campsCrudService.getReservationByDocId(id).subscribe((snapshot) =>{
      const data = snapshot.payload.data();
      this.reservationForm
      .get('lastname')
      ?.setValue(data?.lastname as string)
      this.reservationForm
      .get('firstname')
      ?.setValue(data?.firstname as string)
      this.reservationForm.get('age')?.setValue(data?.age)
      this.reservationForm.get('sex')?.setValue(data?.sex)
      this.reservationForm.get('identitycard')?.setValue(data?.identitycard)
      this.reservationForm.get('campname')?.setValue(data?.campname)
      this.reservationForm.get('date')?.setValue(data?.date)
    });
  
  }

  onUpdate(){
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.authService.isUserLoggedIn().subscribe((user) =>{
      if(user){
        const res: Reservation = {
          user_id: user.uid,
          lastname: this.reservationForm.get('lastname')?.value as string,
          firstname: this.reservationForm.get('firstname')?.value as string,
          age: this.reservationForm.get('age')?.value as number,
          sex: this.reservationForm.get('sex')?.value as string,
          identitycard: this.reservationForm.get('identitycard')?.value as string,
          campname: this.reservationForm.get('campname')?.value as string,
          date: this.reservationForm.get('date')?.value as string,
        }
        this.campsCrudService.updateCamps(res, id).then((_) =>{
            this.router.navigate(['/homem/reservationhandler']);
        })
      }
      
    });
  }

}

