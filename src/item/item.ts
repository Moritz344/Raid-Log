import { Component,Input } from '@angular/core';

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

  constructor() {}

}
