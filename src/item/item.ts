import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item',
  imports: [FormsModule,CommonModule],
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
