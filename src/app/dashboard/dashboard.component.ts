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
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      inlineRadioOptions: new FormControl(''),
    });
  }
  filterOptions() {
      this.router.navigate([`resultados/${this.formSearch.value.name}`]);
  }

}
