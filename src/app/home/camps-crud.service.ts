import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Reservation } from '../models/Reservation';

@Injectable({
  providedIn: 'root'
})
export class CampsCrudService {

  constructor(private angularFirestone: AngularFirestore) {}

  getReservationList(){
    return this.angularFirestone
    .collection("reservation")
    .snapshotChanges();
  }

  createReservation(reservation: Reservation){
    return new Promise<any>((resolve, reject) => {
      this.angularFirestone
      .collection("reservation")
      .add(reservation)
      .then(response => { console.log(response) }, error => reject(error));
    });
  }

  deleteStudent(reservation: Reservation){
    return this.angularFirestone
    .collection("reservation")
    .doc(reservation.id)
    .delete();
  }

  updateCamps(reservation: Reservation){
    return this.angularFirestone
    .collection("reservation")
    .doc(reservation.id)
    .update({
      lastname: reservation.lastname,
      firstname: reservation.firstname,
      age: reservation.age,
      sex: reservation.sex,
      identitycard: reservation.identitycard,
      campname: reservation.campname,
      date: reservation.date
    });
  }
}
