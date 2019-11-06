import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class CartService {

  items = [];

  addToCart(item){
    this.items.push(item);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  constructor() { }

}