import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-author-add',
  templateUrl: './author-add.component.html',
  styleUrls: ['./author-add.component.scss']
})

export class AuthorAddComponent implements OnInit {
  public author: any;
  public formAddAuthor: FormGroup;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.formAddAuthor = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  post() {
    this.http.post('http://localhost:8000/v1/author/', this.formAddAuthor.value).toPromise().then(ret => {
      this.author = ret;
    });
    alert('Edição efetuada');
  }
}
