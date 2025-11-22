import { Component } from '@angular/core';
import { Topbar } from '../topbar/topbar';
import { Requests } from '../service/requests';
import { Item } from '../item/item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginatorModule,PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-arcs',
  imports: [Topbar,Item,FormsModule,CommonModule,PaginatorModule],
  templateUrl: './arcs.html',
  styleUrl: './arcs.css',
})
export class Arcs {
  data: any;
  searchParameter: {text: string,type: string,rarity: string} = { text: "",type: "",rarity: "" };
  currentItemPage: number = 0;
  first: number = 0;
  rows: number = 10;

  initSearchParameter() {
    this.searchParameter = { text: "",type: "",rarity: "" };
  }

  search() {
    if (this.searchParameter.text.length < 2 && this.searchParameter.text != "") { return; };
    this.request.getArcs(this.currentItemPage,this.searchParameter).subscribe((response: any) => {
      this.data = response.data;
      console.log(response.data);
    });
  }

  initData() {
    this.request.getArcs(0,"").subscribe( (response: any) => {
      this.data = response.data;
      console.log(response)
    });
  }

  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;

    this.currentItemPage = (this.first / this.rows ) + 1;

    console.log(this.currentItemPage);

    this.request.getArcs(this.currentItemPage,this.searchParameter).subscribe((response: any) => {
      this.data = response.data;
      console.log(response);
    });

  }

  constructor(private request: Requests) {
    this.initSearchParameter();
    this.initData();

  }

}
