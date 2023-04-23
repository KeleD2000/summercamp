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
    .collection<Reservation>("reservation")
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
    .collection<Reservation>("reservation")
    .doc(reservation.id)
    .delete();
  }

  updateCamps(reservation: Reservation, id: string){
    return this.angularFirestone
    .collection<Reservation>("reservation")
    .doc(id)
    .update(reservation);
  }

  getReservationById(user_id: string){
    return this.angularFirestone.collection<Reservation>('reservation', rf => rf.where("user_id","==", user_id)).snapshotChanges();
  }

  getReservationByDocId(id: string){
    return this.angularFirestone.collection<Reservation>('reservation').doc(id).snapshotChanges();
  }

}
