import { Component } from '@angular/core';
import { Topbar } from '../topbar/topbar';
import { Blocks } from '../blocks/blocks';


@Component({
  selector: 'app-home',
  imports: [Topbar, Blocks],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor() { }

}
