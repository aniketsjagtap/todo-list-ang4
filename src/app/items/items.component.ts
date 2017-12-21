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
 // items : ITEMS;
  selectedItem : Item;
//added items property
  items : Item[] = [];

 
  addItem : any = {};

  
  constructor() { }

  ngOnInit() {
    this.getItem();
  }
  
  getItem() : void{
    this.items = ITEMS;
  }

  onSelect(item : Item): void{
    this.selectedItem = item;
  }

  onAdd()
  {
    //alert("hi");
    this.items.push(new Item(this.addItem.id,this.addItem.name));
    console.log(this.items);
  }

  onDelete(index){
    console.log("index"+index);
    this.items.splice(index,1);
    console.log(this.items);

  }

}
