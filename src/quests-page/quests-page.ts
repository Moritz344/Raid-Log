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

  //TODO: granted item 
  //TODO: required items
  //TODO: locations

  initData() {
    this.request.getQuests(this.search).subscribe((response: any) => {
      this.data = response.data[0];
      console.log(response);
    });
  }

  onObjective() {
    this.showObjective = !this.showObjective;
  }

  onRewards() {
    this.showRewards = !this.showRewards;
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
