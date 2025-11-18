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
  @Input() id: string = "";
  @Input() desc: string = "";
  @Input() img: string = "";

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate([this.id]);
  }

}
