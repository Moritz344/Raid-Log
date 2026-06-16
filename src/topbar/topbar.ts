import { Component, OnInit,inject,signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Settings } from '../service/settings';

@Component({
  selector: 'app-topbar',
  imports: [CommonModule, FormsModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
})
export class Topbar implements OnInit {
  public selected = signal<string>("");
  public settings = inject(Settings);

  constructor(private router: Router) { }

  ngOnInit() {
    this.selected = this.settings.currentTab;
  }

  navigate(route: string) {
    this.router.navigate([route]);
    this.settings.currentTab.set(route);
  }

}
