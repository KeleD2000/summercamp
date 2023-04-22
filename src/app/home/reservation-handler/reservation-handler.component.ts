import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation-handler',
  templateUrl: './reservation-handler.component.html',
  styleUrls: ['./reservation-handler.component.css']
})
export class ReservationHandlerComponent {
  displayedColumns: string[] = ['lastname', 'firstname', 'age', 'sex', 'identitycard', 'campname', 'date']

}
