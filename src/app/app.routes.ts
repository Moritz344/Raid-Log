import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { Items } from '../items/items';
import { Traders } from '../traders/traders';
import { Arcs } from '../arcs/arcs';
import { Quests } from '../quests/quests';
import { ItemPage } from '../item-page/item-page'
import { Tracker } from '../tracker/tracker';

export const routes: Routes = [
  { path: "",component: Home},
  { path: "items",component: Items},
  { path: "traders",component: Traders},
  { path: "arcs",component: Arcs},
  { path: "quests",component: Quests},
  { path: "tracker",component: Tracker},
  { path: "item/:id",component: ItemPage},
  { path: "trader/:name",component: ItemPage},

];
