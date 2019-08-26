import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  public book: any;

  constructor(private http: HttpClient ) { }

  ngOnInit() {
    this.http.get('http://localhost:8000/v1/book').toPromise().then( ret => {
      this.book = ret;
    });
  }

}
