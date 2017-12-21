import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ITEMS } from './items-list';
import { Item } from './item';
import { MessageService } from './message.service';

@Injectable()
export class ItemService {

  /*constructor() { 


  }

  getItems():Item[] { 
    return ITEMS;
  }*/

  constructor(private messageService: MessageService) { }
 
  getItems(): Observable<Item[]> {
    // Todo: send the message _after_ fetching the Items
    this.messageService.add('ItemsService: fetched Items');
    
    return of(ITEMS);
  }
}
