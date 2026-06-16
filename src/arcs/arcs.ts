import { Component,signal } from '@angular/core';
import { Topbar } from '../topbar/topbar';
import { Requests } from '../service/requests';
import { Item } from '../item/item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pagination } from '../pagination/pagination';

@Component({
  selector: 'app-arcs',
  imports: [Topbar,Item,FormsModule,CommonModule,Pagination],
  templateUrl: './arcs.html',
  styleUrl: './arcs.css',
})
export class Arcs {
  public data: any;
  public searchParameter: {text: string,type: string,rarity: string} = { text: "",type: "",rarity: "" };
  public currentPage: number = 1;
  public currentItemPage: number = 0;
  public isLoading: boolean = false;

  public pageData = signal<any>([]);

  initSearchParameter() {
    this.searchParameter = { text: "",type: "",rarity: "" };
  }

  search() {
    this.isLoading = true;
    if (this.searchParameter.text.length < 2 && this.searchParameter.text != "") { return; };
    this.request.getArcs(this.currentItemPage,this.searchParameter,false).subscribe({
      next: (response: any) => {
        this.data = response.data;
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('Error searching arcs:', error);
        this.isLoading = false;
      }
    });
  }

  initData() {
    this.request.getArcs(0,"",false).subscribe({
      next: (response: any) => {
        this.data = response.data;
        this.pageData.set(response.pagination);
        console.log(response);
      },
      error: (error: any) => {
        console.error('Error fetching arcs:', error);
      }
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.currentItemPage = page;

    this.request.getArcs(this.currentItemPage,this.searchParameter,false).subscribe({
      next: (response: any) => {
        this.data = response.data;
        console.log(response);
      },
      error: (error: any) => {
        console.error('Error fetching arcs page:', error);
      }
    });

  }

  constructor(private request: Requests) {
    this.initSearchParameter();
    this.initData();

  }

}
