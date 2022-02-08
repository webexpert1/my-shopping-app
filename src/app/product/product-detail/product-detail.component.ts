import { Component, Input, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DialogPosition, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Product } from '../_models/product';
import { switchMap } from 'rxjs';
import { ProductService } from '../product.service';

export interface DialogData {
  color: string;
  size: string;
  product: any;
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  name: string = '';
  selectedId: number | null = null;
  product: any = null;
  colors = [ { name: 'White', value: 'white' },
     { name: 'Black', value: 'black' },
     { name: 'Gray', value: 'gray' },
     { name: 'Charcoal', value: 'charcoal' }];
  sizes = [ { name: 'Small', value: 'small' },
    { name: 'Medium', value: 'medium' },
    { name: 'Large', value: 'latge' }]

  color: string = this.colors[0].value;
  size: string = this.sizes[0].value;

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private productService: ProductService) {

   }
   openDialog(): void {
    const dialogPosition: DialogPosition = {
      top: '30px',
      right: '30px'
    };

    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '430px',
      // height: '90%',
      // scrollS
      position: dialogPosition,
      data: {color: this.color, size: this.size, product: this.product},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
    this.getProduct();

  }

  getProduct(): void {
    const selectedId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProduct(selectedId);
    console.log('prodddddd is', this.product)
  }


}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  total : number | null = null;
  initialCount = 1;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.total = this.data.product.price;
    console.log('tottt', this.total);

  }

  onNoClick(): void {
    // this.data.name = 'Ric'
    console.log('data is', this.data)
    this.dialogRef.close();

    // console.log('color is', this.color);
    // console.log('size is', size);
  }

  increment() {
    console.log('increment');
    console.log('data', this.data);
    console.log('total is', this.total);

    this.total = ++this.initialCount * this.data.product.price;

  }

  decrement() {
    console.log('decrement');
    if(this.initialCount <= 1) {
      this.total = this.initialCount * this.data.product.price;
    } else {
      this.total = --this.initialCount * this.data.product.price;
    }
  }
}
