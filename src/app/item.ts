export class Item{
   [name : string] : any;
    price : number;

    constructor(name,price){
        
        this.name = name;
        this.price = price;
    }
}