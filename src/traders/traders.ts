import { Component } from '@angular/core';
import { Topbar } from '../topbar/topbar';
import { Requests } from '../service/requests';
import { Item } from '../item/item';

@Component({
  selector: 'app-traders',
  imports: [Topbar,Item],
  templateUrl: './traders.html',
  styleUrl: './traders.css',
})
export class Traders {

  data: any;

  traders: {name: string,desc: string,img: string}[] = [];

  initTraderData() {
    this.traders.push({name: "Apollo",desc:"Speranza isn't Apollo's first rodeo. A traveling mechanic, Apollo has chosen Speranza as his home for the time being, fixing up whatever Raiders need fixing.",img: "apollo.webp"});
    this.traders.push({name: "Shani",desc:"The eagle-eyed head of security for Speranza, Shani has contingency plans for her contingency plans.",img: "shani.webp"});
    this.traders.push({name: "Celeste",desc:"A charismatic Raider leader in Speranza, Celeste is the ubiquitous symbol of hope for humanity in the underground.",img: "celeste.webp"});
    this.traders.push({name: "Tian Wen",desc:"Most people underground haven't seen more of Tian Wen than her eyes. ",img: "tian.webp"});
    this.traders.push({name: "Lance",desc:"Lance is one of the most talented medics Toledo has on offer. An eccentric, bubbly android, Lance is always trying his best to fit in amongst the humans, regularly singing off-pitch at midnight karaoke.",img: "lance.webp"});
  }

  constructor(private requests: Requests) {
    this.initTraderData();
  }


}
