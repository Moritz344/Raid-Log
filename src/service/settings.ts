import { Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Settings {
  public currentTab = signal<string>("");

  constructor() {}

}
