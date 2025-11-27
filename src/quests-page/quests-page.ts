import { Component } from '@angular/core';
import { Requests } from '../service/requests';
import { ActivatedRoute } from '@angular/router';
import { Topbar } from '../topbar/topbar';
import { Item } from '../item/item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quests-page',
  imports: [Topbar,CommonModule,FormsModule,Item],
  templateUrl: './quests-page.html',
  styleUrl: './quests-page.css',
})
export class QuestsPage {
  id: any;
  search: {text: string} = {text: ''};
  data: any;
  showObjective: boolean = true;
  showRewards: boolean = true;
  showGrantedItem: boolean = true;
  showRequiredItem: boolean = true;
  showLocation: boolean = true;

  // TODO: show map image

  initData() {
    this.request.getQuests(this.search).subscribe((response: any) => {
      this.data = response.data[0];
      console.log(response);
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
