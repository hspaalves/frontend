import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
  styles: [
    `
      .main-panel {
        height: 300px;
        overflow-y: scroll;
      }
    `]
})
export class AuthorComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  public static i = 2;
  public author: any;
  selector = '.main-panel';

  onScrollDown() {
    if (this.author[AuthorComponent.i - 2].next === null) {
      stop();
    } else {
      this.http.get(`${this.author[AuthorComponent.i - 2].next}`).toPromise().then( ret => {
        this.author.push(ret);
      });
      AuthorComponent.i +=  1;
    }
  }
  ngOnInit() {
    this.http.get(`http://localhost:8000/v1/author/?page=1`).toPromise().then( ret => {
      this.author = [ret];
    });
  }
}
