import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class Requests {

  limit: number = 12;

  constructor(private http:HttpClient) {}


  getItems(page: number,searchParameter: any) {
    const params = new URLSearchParams();
    if (searchParameter.text) {
      params.append("search",searchParameter.text);
    }else if (searchParameter.type) {
      params.append("item_type",searchParameter.type);
    }else if(searchParameter.rarity) {
      params.append("rarity",searchParameter.rarity);
    }

    params.append("page",page.toString());
    params.append("limit",this.limit.toString());
    const url = `/api/arc-raiders/items?${params}`;
    console.log("url",url);
    return this.http.get( url );
  }

  getItemWithId(id: string) {
    const url = `/api/arc-raiders/items?id=${id}`;
    return this.http.get( url );
  }

  getTraders() {
    const params = new URLSearchParams();

    const url = `/api/arc-raiders/traders?${params}`;

    return this.http.get( url );
  }


}
