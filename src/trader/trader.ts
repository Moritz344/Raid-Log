import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private route: Router) {}

  navigate() {
    this.route.navigate(["trader/" + this.name]);
  }

}
