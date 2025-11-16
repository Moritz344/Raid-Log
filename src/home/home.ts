import { Component } from '@angular/core';
import { Topbar } from '../topbar/topbar';
import { Blocks } from '../blocks/blocks';

// TODO: Speicher die Infos von der API
// Damit sie nicht immer wieder aufgerufen werden muss

@Component({
  selector: 'app-home',
  imports: [Topbar,Blocks],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor() {}

}
