import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.scss']
})
export class AuthorEditComponent implements OnInit {
  public author: any;
  public formEditAuthor: FormGroup;

  constructor(private http: HttpClient, private router: Router ) {  }

  ngOnInit() {
    this.formEditAuthor = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  put() {
    const apiUrl = 'http://localhost:8000/v1';
    this.http.put(`${apiUrl}${this.router.url}/`, this.formEditAuthor.value).toPromise().then(ret => {
      this.author = ret;
    });
    alert('Edição efetuada');
  }
}
