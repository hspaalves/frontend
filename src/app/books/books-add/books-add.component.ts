import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-books-add',
  templateUrl: './books-add.component.html',
  styleUrls: ['./books-add.component.scss']
})
export class BooksAddComponent implements OnInit {
  public book: any;
  public author: any;
  public formAddBook: FormGroup;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8000/v1/author').toPromise().then( ret => {
      this.author = ret;
    });
    this.formAddBook = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      summary: new FormControl('', [Validators.required, Validators.minLength(10)]),
      author: new FormControl('', Validators.required)
    });
  }
  post() {
    this.http.post('http://localhost:8000/v1/book/', this.formAddBook.value).toPromise().then(ret => {
      this.book = ret;
    });
    alert('Edição efetuada');
  }
}
