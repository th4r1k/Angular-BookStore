import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {  BookInfo, BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.css']
})
export class BookstoreComponent implements OnInit {
  bookInfo!: BookInfo;

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => { 
      const slug = params['id'];
      

      this.booksService.getBook(slug)
      .subscribe({
        next: (bookInfo) => this.bookInfo = bookInfo,
        error: (error)=> alert(error.message),
        
      })
    });
}
showRating(): string {
  const stars = ['☆☆☆☆☆', '★☆☆☆☆', '★★☆☆☆', '★★★☆☆', '★★★★☆', '★★★★★'];
  return stars[this.bookInfo?.rating];
}

}
