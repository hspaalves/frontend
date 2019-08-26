import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-author-remove',
  templateUrl: './author-remove.component.html',
  styleUrls: ['./author-remove.component.scss']
})
export class AuthorRemoveComponent implements OnInit {
  public author: any;
  public id: string;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    const apiUrl = 'http://localhost:8000/v1/author/';
    this.http.delete(`${apiUrl}${this.route.snapshot.paramMap.get('id')}/`).toPromise().then(ret => {
      this.author = ret;
    });
    alert(`${apiUrl}${this.route.snapshot.paramMap.get('id')}/`);
  }

}
