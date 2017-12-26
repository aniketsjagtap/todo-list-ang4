import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ITEMS } from './items-list';
import { Item } from './item';
import { MessageService } from './message.service';


import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

@Injectable()
export class ItemService {
  url = "http://localhost:8081/users";
  /*constructor() { 


  }

  getItems():Item[] { 
    return ITEMS;
  }*/

  constructor(private messageService: MessageService,private http:Http) { }
 
  /*getItems(): Observable<Item[]> {
    // Todo: send the message _after_ fetching the Items
    this.messageService.add('ItemsService: fetched Items');
    
    return of(ITEMS);
  }*/

    getItems(): Observable<Item[]> {
      this.messageService.add('ItemsService: fetched Items from node');
      return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
      
    }

    addItem(item:Item): Observable<Item[]> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.put(this.url+"/addItem",item,options)
                 .map(this.extractData)
                 .catch(this.handleErrorObservable);
  } 

  deleteItem(index:number): Observable<Item[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(this.url+"/deleteItem?id="+index,options)
               .map(this.extractData)
               .catch(this.handleErrorObservable);
} 

    private extractData(res: Response) {
     
      let body = res.json();
            return body || {};
        }

    private handleErrorObservable (error: Response | any) {
     // this.messageService.add('Error in ItemsService: '+ (error.message || error));
      console.error(error.message || error);
      return Observable.throw(error.message || error);
    }
}
