import { Injectable, OnInit } from '@angular/core';
import { Product, products } from './_models/product';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {
  constructor() { }
  productCart: Product =  {};


  ngOnInit(): void {
    console.log('inittt')
  }
  getProducts(): Product[] {
    return products;
  }

  getProduct(id: number) {
     return products.find((x: any) => x.id == id)
  }

  removeProduct(id: number) {
    return products.filter((x: any) => x.id !== id)
  }

  updateCart() {

  }
  getCart() {;
    return this.productCart;
  }

}
