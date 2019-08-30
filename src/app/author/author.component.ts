import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  public paginaAtual = 0;
  public author: any;
  constructor(private http: HttpClient ) { }

  ngOnInit() {
    this.http.get('http://localhost:8000/v1/author').toPromise().then( ret => {
      this.author = [ret];
    });
  }
}
