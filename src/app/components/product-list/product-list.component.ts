import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Book, BooksService } from 'src/app/services/books.service';
import { CartService } from '../../services/cart.service';


@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
  })

export class ProductListComponent implements OnInit, OnDestroy {
  private readonly unsubscribe$: Subject<void> = new Subject();
  books: Book[] = [];
  search: string = '';
  columnName!: string;
  sortOrder!: 'asc' | 'desc';

  constructor(
    private http: HttpClient,
    private booksService: BooksService,
    public cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.fetchBooks();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  fetchBooks(): void {
    this.booksService.fetchBooks()
    
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
              next: ({books}) => this.books = books,
              error: (error)=> alert(error.message),
            })
  }

  addToCart(book: Book): void {
    this.cartService.addToCart(book);
  }

  removeFromCart(book: Book): void {
    this.cartService.removeFromCart(book);
  }

  onSortOrder(columnName: string): void {
    this.columnName = columnName;
    this.sortOrder = this.sortOrder === 'desc' ? 'asc' : 'desc';
  }
}
