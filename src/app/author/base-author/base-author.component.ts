import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-base-author',
  templateUrl: './base-author.component.html',
  styleUrls: ['./base-author.component.scss']
})
export class BaseAuthorComponent implements OnInit {
  public authorResult: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    const authorSearch = 'http://localhost:8000/v1/author/?name=';
    this.search(authorSearch).toPromise().then(res => {this.authorResult = res; });

  }
  private search(urlSearch) {
    return this.http.get(`${urlSearch}${this.route.snapshot.paramMap.get('search')}`);
  }
}
