import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import {  ProductDetailComponent, ShoppingCartDialog } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { GalleryModule } from 'ng-gallery';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
  }

  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // }
]

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductDetailComponent,
    ProductListComponent,
    HomeComponent,
    ShoppingCartDialog
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatSliderModule,
    MatDialogModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    // NgxGalleryModule,
    GalleryModule
  ],
  exports: [
    HomeComponent, ProductListComponent
  ]
})
export class ProductModule { }
