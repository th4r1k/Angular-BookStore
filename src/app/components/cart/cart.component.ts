import { Component } from '@angular/core';
import { Book } from '../../services/books.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(public cartService: CartService) { }

  removeFromCart(book: Book): void {
    this.cartService.removeFromCart(book);
  }
}
