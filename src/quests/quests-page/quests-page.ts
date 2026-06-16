import { Component } from '@angular/core';
import { Requests } from '../../service/requests';
import { ActivatedRoute } from '@angular/router';
import { Topbar } from '../../topbar/topbar';
import { ItemBlock } from '../../items/item-block/item-block';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quests-page',
  imports: [Topbar,CommonModule,FormsModule,ItemBlock],
  templateUrl: './quests-page.html',
  styleUrl: './quests-page.css',
})
export class QuestsPage {
  public id: any;
  public search: {text: string} = {text: ''};
  public data: any;
  public showObjective: boolean = true;
  public showRewards: boolean = true;
  public showGrantedItem: boolean = true;
  public showRequiredItem: boolean = true;
  public showLocation: boolean = true;

  initData() {
    this.request.getQuests(0,this.search).subscribe({
      next: (response: any) => {
        this.data = response.data[0];
      },
      error: (error: any) => {
        console.error('Error fetching quest details:', error);
      }
    });
  }

  onItem(item: string) {
    switch (item) {
      case 'objectives':
        this.showObjective = !this.showObjective;
        return;
      case 'location':
        this.showLocation = !this.showLocation;
        return;
      case 'granted_item':
        this.showGrantedItem = !this.showGrantedItem;
        return;
      case 'required_items':
        this.showRequiredItem = !this.showRequiredItem;
        return;
      case 'rewards':
        this.showRewards = !this.showRewards;
        return;
      default:
        return;
    }
  }

  constructor(private request: Requests,
              private route: ActivatedRoute) {
    this.route.paramMap.subscribe(( obs ) => {
      this.id = obs.get("name");
      this.search.text = this.id;
      console.log(obs.get("name"));
    });
    this.initData();
  }

}
