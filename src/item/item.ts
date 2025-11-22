import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {

  @Input() name: string = "";
  @Input() desc: string = "";
  @Input() img: string = "";
  @Input() route: string = "";

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate([this.route]);
  }

}
