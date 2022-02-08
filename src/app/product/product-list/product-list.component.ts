import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../_models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : Product[] | null = null;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.getProducts();
  }

  getProducts(): Product[] {
    return this.productService.getProducts();
  }

}
