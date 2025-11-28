import { Component,OnInit } from '@angular/core';
import { Topbar } from '../topbar/topbar';
import { Item } from '../item/item';
import { Requests } from '../service/requests';
import { PaginatorModule,PaginatorState } from 'primeng/paginator';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-items',
  imports: [Topbar,Item,PaginatorModule,CommonModule,FormsModule],
  templateUrl: './items.html',
  styleUrl: './items.css',
})

// TODO: Loading animation
// TODO: nothing found text

export class Items {
  first: number = 0;
  rows: number = 10;
  data:any;
  currentItemPage: number = 0;
  searchParameter: {text: string,type: string,rarity: string} = { text: "",type: "",rarity: "" };

  itemTypesArray: string[] = [];
  itemRarityArray: string[] = [];

  isLoading: boolean = false;

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
    this.searchParameter = { text: "",type: "",rarity: "" };
  }

  initItems() {
    this.requests.getItems(1,"").subscribe((response: any) => {
      this.data = response.data;
      this.requests.saveInitItemData(this.data);
    });


  }

  onFilter() {
    this.isLoading = true;
    this.requests.getItems(this.currentItemPage,this.searchParameter).subscribe((response: any) => {
      this.data = response.data;
      this.isLoading = false;
    });
  }

  search() {
    this.isLoading = true;
    this.currentItemPage = 0;
    if (this.searchParameter.text.length < 2 && this.searchParameter.text != "") { return; };
    this.requests.getItems(this.currentItemPage,this.searchParameter).subscribe((response: any) => {
      this.data = response.data;
      this.isLoading = false;
    });
  }

  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;

    this.currentItemPage = (this.first / this.rows ) + 1;

    console.log(this.currentItemPage);

    console.log("currently searching:",this.searchParameter.text);
    this.requests.getItems(this.currentItemPage,this.searchParameter).subscribe((response: any) => {
      this.data = response.data;
      console.log(response);
    });

  }

  ngOnInit() {
  }

}
