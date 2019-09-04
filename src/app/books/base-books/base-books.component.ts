import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-base-books',
  templateUrl: './base-books.component.html',
  styleUrls: ['./base-books.component.scss']
})
export class BaseBooksComponent implements OnInit {
  public bookResult: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    const bookSearch = 'http://localhost:8000/v1/book/?name=';
    this.search(bookSearch).toPromise().then(res => {this.bookResult = res; });
  }
  private search(urlSearch) {
    return this.http.get(`${urlSearch}${this.route.snapshot.paramMap.get('search')}`);
  }

}
