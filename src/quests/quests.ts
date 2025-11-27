import { Component } from '@angular/core';
import { Topbar } from '../topbar/topbar';
import { Requests } from '../service/requests';
import { Item } from '../item/item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-quests',
  imports: [Topbar,Item,FormsModule,CommonModule],
  templateUrl: './quests.html',
  styleUrl: './quests.css',
})
export class Quests {

  data: any;
  searchParameter: {text: string,} = { text: ""};
  isLoading: boolean = false;

  initData() {
    this.request.getQuests("").subscribe((response:any) => {
      this.data = response.data;
      console.log(this.data);
    });
  }

  search() {
    this.isLoading = true;
    if (this.searchParameter.text.length < 2 && this.searchParameter.text != "") { return; };
    this.request.getQuests(this.searchParameter).subscribe((response: any) => {
      this.data = response.data;
      this.isLoading = false;
    });
  }

  constructor(private request: Requests) {
    this.initData();
  }

}
