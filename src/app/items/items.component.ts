import { Component, OnInit } from '@angular/core';
import{Item} from '../item';
import { ITEMS } from '../items-list';
import { ItemService} from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  /*item : Item = {
     name: 'apple'
     price: 100
  };*/
 // items : ITEMS;
  selectedItem : Item;
//added items property
  items : Item[] = [];

 
  addItem : any = {};

  
  constructor(private itemService : ItemService) { }

  ngOnInit() {
    this.getItems();
  }
  
  /*getItems() : void{
    this.items = ITEMS;
  }*/
  getItems() : void{
  this.itemService.getItems()
  .subscribe(items => this.items = items);
   }
  onSelect(item : Item): void{
    this.selectedItem = item;
   
  }

  onAdd()
  {
    //alert("hi");
    this.items.push(new Item(this.addItem.name,this.addItem.price));
    console.log(this.items);
    this.addItem.name = null;
    this.addItem.price = null;
  }

  onDelete(index){
    console.log("index"+index);
    this.items.splice(index,1);
    console.log(this.items);
  }

}
