import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from '../products/product-list.component';
import { ProductDetailGuard } from '../products/product-detail.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent},
      { 
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductListComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }
