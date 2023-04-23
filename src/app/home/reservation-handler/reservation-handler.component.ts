import { Component, OnInit } from '@angular/core';
import { CampsInfo } from 'src/app/models/CampsInfo';
import { CampsCrudService } from '../camps-crud.service';
import { Reservation } from 'src/app/models/Reservation';

@Component({
  selector: 'app-reservation-handler',
  templateUrl: './reservation-handler.component.html',
  styleUrls: ['./reservation-handler.component.css']
})
export class ReservationHandlerComponent implements OnInit {
  displayedColumns: string[] = ['lastname', 'firstname', 'age', 'sex', 'identitycard', 'campname', 'date', 'operations'];

  reservations!: Reservation[];
  CampsInfo!: CampsInfo[];

  constructor(private campsCrudService: CampsCrudService){

  }

  ngOnInit(): void {
    this.campsCrudService.getReservationList().subscribe(res => {
      this.reservations = res.map((reservation) => {
        const item = reservation.payload.doc.data();
        const id = reservation.payload.doc.id;
        return {id, ...item};
      })
    });
    
  }

  dataSource = this.reservations;

  onDelete(reservation: Reservation){
    this.campsCrudService.deleteStudent(reservation).then();
    
  }

}
