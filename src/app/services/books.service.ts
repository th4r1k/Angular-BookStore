import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Book, BookInfo } from '../models/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
 
  private apiURL = 'https://api.itbook.store/1.0/search/mongodb';
  private bookURL = 'https://api.itbook.store/1.0';

  constructor(private http: HttpClient) { }

  fetchBooks(): Observable<{ books: Book[] }> {
    return this.http.get<{ books: Book[] }>(`${this.apiURL}`);
  }

  getBook(isbn: number): Observable<BookInfo> {
    return this.http.get<BookInfo>(`${this.bookURL}/books/${isbn}`);
  }
  
}
export interface Book {
  title: string,
  subtitle?: string,
  isbn13: string,
  price: string,
  image: string
}

export interface BookInfo {
  price: string,
  rating: number,
  title: string,
  authors: string,
  publisher: string,
  year: string,
  pages: string,
  language: string,
  url: string
  image: string,
  pdf?: any,
}

