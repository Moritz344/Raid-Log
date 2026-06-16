import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Requests } from '../../service/requests';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Topbar } from '../../topbar/topbar';

@Component({
  selector: 'app-item-page',
  standalone: true,
  imports: [CommonModule, FormsModule, Topbar],
  templateUrl: './item-page.html',
  styleUrl: './item-page.css',
})
export class ItemPage {

  id: any;
  item: any;


  constructor(private route: ActivatedRoute,
    private request: Requests) {

    this.route.paramMap.subscribe((obs) => {
      this.id = obs.get("id");
    });

    this.initItemData();
  }

  entriesNotToShowStats: string[] = ["reducedDispersionRecoveryTime"];

  initItemData() {
    this.request.getItemWithId(this.id).subscribe({
      next: (response: any) => {
        this.item = response.data[0];
      },
      error: (error: any) => {
        console.error('Error fetching item:', error);
      }
    });
  }

  getStatBlockEntries() {
    if (!this.item?.stat_block) return [];
    return Object.entries(this.item.stat_block)
      .filter(([key]) => !this.entriesNotToShowStats.includes(key))
      .map(([key, value]) => ({ key, value }));
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
