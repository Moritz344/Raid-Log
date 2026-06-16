import { Component, signal} from '@angular/core';
import { Topbar } from '../topbar/topbar';
import { ItemBlock } from './item-block/item-block';
import { Requests } from '../service/requests';
import { Pagination } from '../pagination/pagination';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-items',
  imports: [Topbar, ItemBlock, Pagination, CommonModule, FormsModule],
  templateUrl: './items.html',
  styleUrl: './items.css',
})

// TODO: Loading animation
// TODO: nothing found text
// TODO: show item rarity in item block

export class Items {
  data: any;
  currentPage: number = 1;
  currentItemPage: number = 0;
  searchParameter: { text: string, type: string, rarity: string } = { text: "", type: "", rarity: "" };

  itemTypesArray: string[] = [];
  itemRarityArray: string[] = [];

  isLoading: boolean = false;
  public pageData = signal<any>([]);

  constructor(private requests: Requests) {
    this.initItemTypes();
    this.initRarity();
    this.initSearchParameter();
    this.initItems();
  }

  initItemTypes() {
    this.itemTypesArray = [
      "Advanced Material",
      "Ammunition",
      "Augment",
      "Blueprint",
      "Deployable",
      "Gadget",
      "Improvised",
      "Misc",
      "Modification",
      "Nature",
      "Quick Use",
      "Recyclable",
      "Refined Material",
      "Shield",
      "Throwable",
      "Topside Material",
      "Trinket",
      "Weapon",
      "Key",
      "Basic Material",
      "Consumbale",
      "Explosives",
      "Material",
      "Quest Item",

    ];
  }

  initRarity() {
    this.itemRarityArray = [
      "Common",
      "Uncommon",
      "Rare",
      "Epic",
      "Legendary"
    ];
  }

  initSearchParameter() {
    this.searchParameter = { text: "", type: "", rarity: "" };
  }

  initItems() {
    this.requests.getItems(1, "").subscribe({
      next: (response: any) => {
        this.data = response.data;
        this.requests.saveInitItemData(this.data);
        this.pageData.set(response.pagination);
      },
      error: (error: any) => {
        console.error('Error fetching items:', error);
      }
    });


  }

  onFilter() {
    this.isLoading = true;
    this.requests.getItems(this.currentItemPage, this.searchParameter).subscribe({
      next: (response: any) => {
        this.data = response.data;
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('Error filtering items:', error);
        this.isLoading = false;
      }
    });
  }

  search() {
    this.isLoading = true;
    this.currentItemPage = 0;
    if (this.searchParameter.text.length < 2 && this.searchParameter.text != "") { return; };
    this.requests.getItems(this.currentItemPage, this.searchParameter).subscribe({
      next: (response: any) => {
        this.data = response.data;
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('Error filtering items:', error);
        this.isLoading = false;
      }
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.currentItemPage = page;

    this.requests.getItems(this.currentItemPage, this.searchParameter).subscribe({
      next: (response: any) => {
        this.data = response.data;
      },
      error: (error: any) => {
        console.error('Error fetching items page:', error);
      }
    });

  }

  ngOnInit() {
  }

}
