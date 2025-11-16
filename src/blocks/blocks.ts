import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blocks',
  imports: [],
  templateUrl: './blocks.html',
  styleUrl: './blocks.css',
})
export class Blocks {
  @Input() name: string = "";
  @Input() img: string = "";
  @Input() route: string = "";

  constructor(private router: Router) {}

  navigate(location: string) {
    this.router.navigate([location]);
  }

}
