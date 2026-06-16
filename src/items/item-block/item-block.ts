import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-block',
  imports: [FormsModule,CommonModule],
  templateUrl: './item-block.html',
  styleUrl: './item-block.css',
})
export class ItemBlock {
  @Input() name: string = "";
  @Input() desc: string = "";
  @Input() img: string = "";
  @Input() route: string = "";

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate([this.route]);
  }

}
