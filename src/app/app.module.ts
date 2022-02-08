import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootStoreModule } from './root-store/root-store.module';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './root-store/product-store/counter.reducer';
import { SharedModule } from './shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
     import('./product/product.module').then(m => m.ProductModule),
  },
  // {
  //   path: 'products/:id',
  //   loadChildren: () =>
  //    import('./product/product.module').then(m => m.ProductModule),
  // }
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  }
  // {
  //   path: '**',
  //   redirectTo: 'products',
  //   pathMatch: 'full'
  // }

  // {
  //   path: 'products/:id',
  //   loadChildren: () => import('./')
  // }

]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RootStoreModule,
    StoreModule.forRoot({ count: counterReducer }),
    SharedModule,
    NgbModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
