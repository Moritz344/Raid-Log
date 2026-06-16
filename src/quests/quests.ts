import { Component,signal,inject } from '@angular/core';
import { Topbar } from '../topbar/topbar';
import { Requests } from '../service/requests';
import { Item } from '../item/item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pagination } from '../pagination/pagination';


@Component({
  selector: 'app-quests',
  imports: [Topbar, Item, FormsModule, CommonModule,Pagination],
  templateUrl: './quests.html',
  styleUrl: './quests.css',
})
export class Quests {
  public data: any;
  public searchParameter: { text: string, } = { text: "" };
  public isLoading: boolean = false;
  public pageData = signal<any>([]);

  public currentPage: number = 1;
  public currentItemPage: number = 0;

  public request = inject(Requests);

  constructor() {
    this.initData();
  }

  initData() {
    this.request.getQuests(this.currentItemPage,"").subscribe({
      next: (response: any) => {
        this.data = response.data;
        this.pageData.set(response.pagination);
      },
      error: (error: any) => {
        console.error('Error fetching quests:', error);
      }
    });
  }

  search() {
    this.isLoading = true;
    if (this.searchParameter.text.length < 2 && this.searchParameter.text != "") { return; };
    this.request.getQuests(this.currentItemPage,this.searchParameter).subscribe({
      next: (response: any) => {
        this.data = response.data;
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('Error searching quests:', error);
        this.isLoading = false;
      }
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.currentItemPage = page;

    this.request.getQuests(this.currentItemPage, this.searchParameter).subscribe({
      next: (response: any) => {
        this.data = response.data;
      },
      error: (error: any) => {
        console.error('Error fetching items page:', error);
      }
    });

  }


}
