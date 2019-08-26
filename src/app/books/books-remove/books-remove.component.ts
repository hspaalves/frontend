import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-books-remove',
  templateUrl: './books-remove.component.html',
  styleUrls: ['./books-remove.component.scss']
})
export class BooksRemoveComponent implements OnInit {
  public book: any;
  public id: string;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const apiUrl = 'http://localhost:8000/v1/book/';
    this.http.delete(`${apiUrl}${this.route.snapshot.paramMap.get('id')}/`).toPromise().then(ret => {
      this.book = ret;
    });
    alert(`${apiUrl}${this.route.snapshot.paramMap.get('id')}/`);
  }

}
