import { Component, OnInit } from '@angular/core';
import { CampsInfo } from 'src/app/models/CampsInfo';
import { CampsCrudService } from '../camps-crud.service';
import { Reservation } from 'src/app/models/Reservation';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-reservation-handler',
  templateUrl: './reservation-handler.component.html',
  styleUrls: ['./reservation-handler.component.css']
})
export class ReservationHandlerComponent implements OnInit {
  displayedColumns: string[] = ['lastname', 'firstname', 'age', 'sex', 'identitycard', 'campname', 'date', 'operations'];
  dataSource: any;
  reservations!: Reservation[];
  CampsInfo!: CampsInfo[];

  constructor(private campsCrudService: CampsCrudService, private authService: AuthService){

  }

  ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe((user) => {
      if(user){
        this.campsCrudService.getReservationById(user.uid).subscribe((res) => {
          this.reservations = res.map((res) => {
            const item = res.payload.doc.data();
            const id = res.payload.doc.id;
            return{id, ...item};
          });
        });
      }
    });
    this.dataSource = this.reservations;
  }

  

  onDelete(reservation: Reservation){
    this.campsCrudService.deleteStudent(reservation).then();
    
  }

}
