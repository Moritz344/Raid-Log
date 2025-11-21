import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-trader',
  imports: [],
  templateUrl: './trader.html',
  styleUrl: './trader.css',
})
export class Trader {
  @Input() name: string = "";
  @Input() img: string = "";
  @Input() desc: string = "";

  constructor() {}

  navigate() {}

}
