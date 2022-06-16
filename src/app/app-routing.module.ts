import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { BookstoreComponent } from './components/bookstore/bookstore.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'books', component:ProductListComponent},
  { path: 'books/:id', component: BookstoreComponent },
  { path: 'books/cart', component: CartComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
