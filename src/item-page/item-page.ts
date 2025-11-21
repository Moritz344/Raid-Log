import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Requests } from '../service/requests';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Topbar } from '../topbar/topbar';

@Component({
  selector: 'app-item-page',
  standalone: true,
  imports: [CommonModule,FormsModule,Topbar],
  templateUrl: './item-page.html',
  styleUrl: './item-page.css',
})
export class ItemPage {

  // TODO: use stat_block
  id: any;
  item: any;

  entriesNotToShow: string[] = ["description","icon","id","stat_block","created_at","updated_at","flavor_text"];
  entriesNotToShowStats: string[] = ["reducedDispersionRecoveryTime","reducedDispersionRecoveryTime"];


  constructor(private route: ActivatedRoute,
              private request: Requests) {

    this.route.paramMap.subscribe(( obs ) => {
      this.id = obs.get("id");
      console.log(obs.get("id"));
    });

    this.initItemData();
  }

  initItemData() {
    this.request.getItemWithId(this.id).subscribe((response: any) => {
        this.item = response.data[0];
        console.log(this.item);

    });
  }

  getStatBlockEntries() {
    return Object.entries(this.item.stat_block).map(([key, value]) => ({ key, value }));
  }

  getNormalStatsEntries() {
    return Object.entries(this.item).map(([key,value]) => ({ key,value }));
  }


  getBackgroundColor() {
    switch (this.item.rarity) {
      case 'Common':
        return "var(--common)";
      case 'Uncommon':
        return "var(--uncommon)"
      case 'Rare':
        return "var(--rare)"
      case 'Legendary':
        return "var(--legendary)"
      case 'Epic':
        return "var(--epic)"
      default:
        return "white";
    }
  }

  ngOnInit() {


  }

}
