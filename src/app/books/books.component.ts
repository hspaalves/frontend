import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  styles: [
    `
      .main-panel {
        height: 300px;
        overflow-y: scroll;
      }
    `]
})
export class BooksComponent implements OnInit {
  constructor(private http: HttpClient ) { }

  public static i = 2;
  selector = '.main-panel';
  public book: any;

  onScrollDown() {
    if (this.book[BooksComponent.i - 2].next === null) {
      stop();
    } else {
      this.http.get(`${this.book[BooksComponent.i - 2].next}`).toPromise().then( ret => {
        this.book.push(ret);
      });
      BooksComponent.i +=  1;
    }
  }

  ngOnInit() {
    this.http.get('http://localhost:8000/v1/book/?page=1').toPromise().then( ret => {
      this.book = [ret];
    });
  }

}
