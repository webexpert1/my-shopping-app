import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product : any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('product is', this.product)
  }

  goToDetail() {
    console.log('hi', this.product);

    // this.router.navigate(['/products/1'])
  }
}
