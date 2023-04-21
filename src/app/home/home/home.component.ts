import { Component } from '@angular/core';
import { Camps } from 'src/app/models/Camps';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    ELEMENT_DATA: Camps[] = [
    {text:'Ha esetleg egy vízikalandra vágynál, akkor a legjobb választás számodra a WaterLand nevezetű tábor',img:'assets/images/wpark.png'},
    {text:'Ha esetleg egy túrázós kalandra vágynál, ahol te lehetsz az erdő úra , akkor a legjobb választás számodra a ForestLand nevezetű tábor', img:'assets/images/fpark.png'},
    {text:'Ha esetleg egy varázslatos dzsungelkalandra vágynál, akkor a legjobb választás számodra a AdventureLand nevezetű tábor', img:'assets/images/apark.png'}
  ];

}
