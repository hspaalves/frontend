import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})

export class ResultadosComponent implements OnInit {
  public bookResult: any;
  public authorResult: any;

  constructor(private route: ActivatedRoute, private http: HttpClient,  private router: Router ) { }

  ngOnInit() {
    const authorSearch = 'http://localhost:8000/v1/author/?name=';
    const bookSearch = 'http://localhost:8000/v1/book/?name=';
    this.search(authorSearch).toPromise().then(res => {this.authorResult = res; });
    this.search(bookSearch).toPromise().then(res => {this.bookResult = res; });
  }
  private search(urlSearch) {
    return this.http.get(`${urlSearch}${this.route.snapshot.paramMap.get('search')}`);
  }
}
