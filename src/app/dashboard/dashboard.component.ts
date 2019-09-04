import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public formSearch: FormGroup;

  constructor(private http: HttpClient, private router: Router ) { }

  ngOnInit() {
    this.formSearch = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(1)]),
      inlineRadioOptions: new FormControl(''),
    });
  }
  filterOptions() {
    if (this.formSearch.value.inlineRadioOptions === 'author') {
      this.router.navigate([`resultados/author/${this.formSearch.value.name}`]);
    } else if (this.formSearch.value.inlineRadioOptions === 'book') {
      this.router.navigate([`resultados/books/${this.formSearch.value.name}`]);
    } else {
      this.router.navigate([`resultados/${this.formSearch.value.name}`]);
    }
  }

}
