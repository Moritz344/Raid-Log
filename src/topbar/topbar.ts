import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-topbar',
  imports: [CommonModule, FormsModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
})
export class Topbar implements OnInit {
  public selected: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
    this.selected = this.router.url.replace('/', '');

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.selected = event.urlAfterRedirects.replace(/^\//, '');
    });
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }

}
