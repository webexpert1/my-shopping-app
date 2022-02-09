import { Component, Input, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DialogPosition, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Product } from '../_models/product';
import { switchMap, Observable, of, NEVER } from 'rxjs';
import { ProductService } from '../product.service';

import { Store } from '@ngrx/store';
import { increment, decrement, reset } from 'src/app/root-store/product-store/product.actions';
// import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { GalleryItem, ImageItem } from 'ng-gallery';

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
  count$: Observable<number> =  NEVER;
  // galleryOptions: NgxGalleryOptions[] = [];
  // galleryImages: NgxGalleryImage[] = [];

  images: GalleryItem[] = [];

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

  constructor(
     private route: ActivatedRoute,
     public dialog: MatDialog,
     private productService: ProductService,
     private store: Store<{ count: number }>) {
    // console.log(selectCount)
   }
   openDialog(): void {
    const dialogPosition: DialogPosition = {
      top: '30px',
      right: '30px'
    };


    const dialogRef = this.dialog.open(ShoppingCartDialog, {
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

    // this.images = [
    //   new ImageItem(
    //     { src: 'assets/subImage1.png', thumb: 'assets/subImage1.png' }),
    //     { src: 'assets/subImage1.png', thumb: 'assets/subImage1.png' }
      // 'assets/subImage2.png',
      // 'assets/subImage3.png',
    // ];

    // this.galleryOptions = [
    //   {
    //     width: '500px',
    //     height: '500px',
    //     imagePercent: 100,
    //     thumbnailsColumns: 4,
    //     // imageAnimation: NgxGalleryAnimation.Slide,
    //     preview: false
    //   }
    // ];

    // this.galleryImages = this.product.subImages;
    // console.log(this.galleryImages)

  }

  getProduct(): void {
    const selectedId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProduct(selectedId);
    console.log('prodddddd is', this.product)
  }

  addProductToCart() {
    this.store.dispatch(increment());
  }


}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-dialog.html',
})
export class ShoppingCartDialog {
  total : number | null = null;
  initialCount = 1;
  count$: Observable<number> =  NEVER;
  isProducCleared : Boolean = false;

  constructor(
    private productService: ProductService,
    public dialogRef: MatDialogRef<ShoppingCartDialog>,
    private store: Store<{ count: number }>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.total = this.data.product.price;
    this.count$ = this.store.select('count');
    this.count$.subscribe((count: number) => {
      if(count < 1) {
        this.total =  this.data.product.price;
      } else {
        this.total = count * this.data.product.price;
      }
    })


  }

  onNoClick(): void {
    console.log('data is', this.data)
    this.reset();
    this.dialogRef.close();
  }


  addProductToCart() {
    this.store.dispatch(increment());
  }

  removeProductFromCart() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  clearProduct() {
    this.reset();
    this.isProducCleared = true;
    console.log('clearing')
  }

}
