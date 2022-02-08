import { Injectable } from '@angular/core';
import { Product, products } from './_models/product';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }

  getProducts(): Product[] {
    return products;
  }

  getProduct(id: number) {
     return products.find((x: any) => x.id == id)
  }

  removeProduct(id: number) {
    return products.filter((x: any) => x.id !== id)
 }

}
