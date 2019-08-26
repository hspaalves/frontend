import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.scss']
})
export class BooksEditComponent implements OnInit {
  public book: any;
  public formEditBook: FormGroup;
  public author: any;

  constructor(private http: HttpClient, private router: Router ) { }

  ngOnInit() {
    this.http.get('http://localhost:8000/v1/author').toPromise().then( ret => {
      this.author = ret;
    });
    this.formEditBook = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      summary: new FormControl('', [Validators.required, Validators.minLength(10)]),
      author: new FormControl('', Validators.required)
    });
  }

  put() {
    const apiUrl = 'http://localhost:8000/v1';
    this.http.put(`${apiUrl}${this.router.url}/`, this.formEditBook.value).toPromise().then(ret => {
      this.book = ret;
    });
    alert('Edição efetuada');
  }

}
