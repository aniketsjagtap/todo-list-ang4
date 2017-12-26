import { Component, OnInit } from '@angular/core';
import{Item} from '../item';
import { ITEMS } from '../items-list';
import { ItemService} from '../item.service';
import {Router} from '@angular/router';
import { error } from 'util';

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
 flag:boolean = false;
 errorMsg:string = '';

  
  constructor(private itemService : ItemService,private router:Router) { }

  ngOnInit() {
    this.getItems();
  }
  
  /*getItems() : void{
    this.items = ITEMS;
  }*/
  getItems() : void{
  this.itemService.getItems()
  .subscribe(items => this.items = items);
  console.log(this.items);
   }
  onSelect(item : Item): void{
    this.selectedItem = item;
   
  }

  onAdd()
  {
    //alert("hi");
    // this.items.push(new Item(this.addItem.name,this.addItem.price));
    //console.log(this.addItem.length);
   
    if(!this.addItem.name || !this.addItem.price){

      this.flag = true;
      if(!this.addItem.name && !this.addItem.price){
        this.errorMsg = 'ALL fields required';
      }
      else if(!this.addItem.name){
        this.errorMsg = 'Name need to be entered!!';
      }
      else if(!this.addItem.price)
      {
        this.errorMsg = 'Price need to be entered!!';
      }
    }
    else{
      console.log(new Item(this.addItem.name,this.addItem.price));
       
      this.itemService.addItem(new Item(this.addItem.name,this.addItem.price))
      .subscribe(items => this.items = items);
      this.addItem.name = null;
      this.addItem.price = null;
      this.errorMsg = '';
      }
  }

  onDelete(index){
    // console.log("index"+index);
    // this.items.splice(index,1);
    // console.log(this.items);
    this.itemService.deleteItem(index)
    .subscribe(items => this.items = items);
  }

}
