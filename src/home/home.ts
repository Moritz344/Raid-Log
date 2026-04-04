import { Component } from '@angular/core';
import { Topbar } from '../topbar/topbar';
import { Blocks } from '../blocks/blocks';

// TODO: work on pagination style

@Component({
  selector: 'app-home',
  imports: [Topbar, Blocks],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor() { }

}
