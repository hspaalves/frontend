import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})

export class BookDetailComponent implements OnInit {
  public book: any;
  public author: any;


  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const bookUrl = 'http://localhost:8000/v1/book/';
    this.http.get(`${bookUrl}${this.route.snapshot.paramMap.get('id')}/author`).toPromise().then( ret => {
      this.author = ret;
    });
    this.http.get(`${bookUrl}${this.route.snapshot.paramMap.get('id')}/`).toPromise().then( ret => {
      this.book = [ret];
    });
  }
}
