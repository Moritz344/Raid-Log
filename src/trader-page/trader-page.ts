import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Requests } from '../service/requests';
import { Topbar } from '../topbar/topbar';
import { Item } from '../item/item';

@Component({
  selector: 'app-trader-page',
  imports: [Topbar,Item],
  templateUrl: './trader-page.html',
  styleUrl: './trader-page.css',
})
export class TraderPage {
  name: any;
  data: any;

  descriptions:{name: string,desc:string}[] = [
    {
    name:"Celeste",
    desc:`
    A charismatic Raider leader in Speranza, Celeste is the ubiquitous symbol of hope for humanity in the underground. As the leader of the Raiders, she is responsible for keeping morale up, even as the ARC attacks worsen, and when tragedy comes to pass. While she tries to keep the pressure off, you can find her staying up strategizing into the wee hours of the night, furiously playing darts by the bar, and drinking coffee all day to keep her eyes open.
    Celeste lost her home multiple times to ARC attacks during her childhood. The tragedy of losing her father left her deeply scared, but she adapted quickly to survive, developing skills to create and manage what she needed. This survival instinct eventually led to the founding of Speranza, humanity's final stronghold underground. To Celeste, Speranza isn't just a settlement, it's a living entity she cultivated with her own two hands. She has dedicated herself to the city's survival, constantly preparing for the future. But with the growing ARC threat, she senses Speranza won't remain safe forever. She's preparing an evacuation plan in case of an emergency. As a Raider, can you help Celeste protect Speranza's future?
    A survivor of The First Wave, Celeste now tries to keep Speranza running smoothly. It's an entirely different challenge.
    `
    },
    {
    name:"Shani",
    desc:`
    The eagle-eyed head of security for Speranza, Shani has contingency plans for her contingency plans. She is Speranza’s resident ARC expert, and Celeste’s biggest resource when it comes to planning successful skirmishes topside. While most of Speranza’s inhabitants know her to be obsessive, suspicious, and paranoid, Shani doesn’t mind her reputation as long as she’s able to keep her city safe.
    Shani fights an uphill battle to keep Speranza safe. She could use a hand, but don't look at her sideways.
    `
    },
    {
    name:"Lance",
    desc:`
      Lance is one of the most talented medics Toledo has on offer. An eccentric, bubbly android, Lance is always trying his best to fit in amongst the humans, regularly singing off-pitch at midnight karaoke, shopping for the newest underground fashion trends, or boxing in Speranza’s fight ring. While amnesia has robbed him of his memories from who he was before he arrived, those trapped memories won’t stay gone forever.
      Need health items? The only thing Lance can't cure is the common cold.
    `
    },
    {
    name:"Tian Wen",
    desc:`
      Most people underground haven’t seen more of Tian Wen than her eyes. Speranza’s resident gun craftsman, Tian Wen is a recluse who seemingly prefers the company of her tools to any human being. She wears her disdain for most Raiders on her sleeve, and only interacts with them out of her own interests. But while she would never admit it, she has a soft spot or two for things in need of repair — action figures, weapons, and sometimes even people.
      Some call Tian Wen the "gun nut", but that's just half the truth. She also has a supernatural knack for tech and construction.
    `
    },
    {
    name:"Apollo",
    desc:`
      Speranza isn’t Apollo’s first rodeo. A traveling mechanic, Apollo has chosen Speranza as his home for the time being, fixing up whatever Raiders need fixing. While he can at times seem cryptic about his past, Apollo can’t help but try and make wherever he is a better place. Whether that’s running a kids’ football team, or keeping the library stocked with books, Apollo knows there’s more to life than just survival.
      When he's not dealing in explosives, Apollo is an avid flute player, so pray he won't blow his fingers off.
    `
    },
  ];

  initTraderData() {
    this.request.getTraders().subscribe((response: any) => {
      this.data = response.data[this.name.replace(/ /g, '')];
      
    });
    console.log(this.descriptions);

  }

  getDescriptionForTrader() {
    switch (this.name) {
      case 'Celeste':
        return this.descriptions[0].desc;
      case "Apollo":
        return this.descriptions[4].desc ;
      case "Lance":
        return this.descriptions[2].desc;
      case "Shani":
        return this.descriptions[1].desc;
      case "Tian Wen":
        return this.descriptions[3].desc;
      default:
        return "";
    }

  }

  getImageForTrader() {
    switch (this.name) {
      case 'Celeste':
        return "celeste.webp";
      case "Apollo":
        return "apollo.webp";
      case "Lance":
        return "lance.webp";
      case "Shani":
        return "shani.webp";
      case "Tian Wen":
        return "tian.webp"
      default:
        return "";
    }
  }

  constructor(private route: ActivatedRoute,
              private request: Requests) {
    this.route.paramMap.subscribe(( obs ) => {
      this.name = obs.get("name");
      console.log(obs.get("name"));
    });

    this.initTraderData();

  }

}
