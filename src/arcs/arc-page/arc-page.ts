import { Component } from '@angular/core';
import { Topbar } from '../../topbar/topbar';
import { ItemBlock } from '../../items/item-block/item-block';
import { ActivatedRoute } from '@angular/router';
import { Requests } from '../../service/requests';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-arc-page',
  imports: [Topbar,FormsModule,CommonModule,ItemBlock],
  templateUrl: './arc-page.html',
  styleUrl: './arc-page.css',
})

export class ArcPage {
  id: any;
  item: any;
  searchParameter: {text: string} = {text: ""};
  showLoot: boolean = true;

  initData() {
    this.request.getArcs(0,this.searchParameter,true).subscribe({
      next: (response: any) => {
        if (response.data.length > 0) {
          this.item = response.data[0];
        }
      },
      error: (error: any) => {
        console.error('Error fetching arc details:', error);
      }
    });
  }

  constructor(private route: ActivatedRoute,
              private request: Requests) {

    this.route.paramMap.subscribe(( obs ) => {
      this.id = obs.get("id");
      if (this.id == "bison") {
        this.id = "leaper";
      }
      this.searchParameter.text = this.id;
    });
    this.initData();


  }

  onLootDetails() {
    this.showLoot = !this.showLoot;
  }

}
