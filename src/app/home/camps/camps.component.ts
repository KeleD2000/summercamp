import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CampsInfo } from 'src/app/models/CampsInfo';

@Component({
  selector: 'app-camps',
  templateUrl: './camps.component.html',
  styleUrls: ['./camps.component.css']
})
export class CampsComponent {

  constructor(private router: Router){}

  ELEMENT_DATA: CampsInfo[] = [
    { campname: "WaterLand", data: {price: 40000, startdate: '2023.07.01.', enddate: '2023.07.07.', place: 'Adriatic sea', houseroom: 40} },
    { campname: "ForestLand", data: {price: 60000, startdate: '2023.07.20.', enddate: '2023.07.27.', place: 'Amazon', houseroom: 70} },
    { campname: "AdventureLand",data: {price: 50000, startdate: '2023.08.05.', enddate: '2023.08.12.', place: 'Disneyland Paris', houseroom: 60} }
  ];

}
