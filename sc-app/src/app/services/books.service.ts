import { Book } from '../model/book.model';
import { Injectable} from '@angular/core';
import { Subject } from 'rxjs';
// subject is a type of event emitter
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class BookService {
  private books: Book[] = [];
  private booksUpdated = new Subject<Book[]>();

  constructor(private http: HttpClient) {}

  getSocBooks() {
    this.http.get('http://localhost:3000/sociology')
    .subscribe(data => {
      this.books = data['books'].recordset;
      this.booksUpdated.next([...this.books]);
    });
  }

  getBooksUpdatedListener() {
    return this.booksUpdated.asObservable();
  }
}
