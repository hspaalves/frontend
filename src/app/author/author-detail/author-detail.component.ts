import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.scss']
})
export class AuthorDetailComponent implements OnInit {
  public book: any;
  public author: any;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const bookUrl = 'http://localhost:8000/v1/book/';
    const authorUrl = 'http://localhost:8000/v1/author/';
    this.http.get(`${authorUrl}${this.route.snapshot.paramMap.get('id')}/`).toPromise().then( ret => {
      this.author = [ret];
    });
    this.http.get(`${bookUrl}`).toPromise().then(ret => {
      this.book = ret;
    });
  }

}
