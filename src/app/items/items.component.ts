import { Component, OnInit } from '@angular/core';
import{Item} from '../item';
import { ITEMS } from '../items-list';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  /*item : Item = {
    id: 1,
    name: 'apple'
  };*/
//added items property
  items = ITEMS;

  selectedItem : Item;
  
  constructor() { }

  ngOnInit() {
  }
  
  onSelect(item : Item): void{
    this.selectedItem = item;
  }
}
