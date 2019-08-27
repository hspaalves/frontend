import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthorComponent} from './author/author.component';
import {AppComponent} from './app.component';
import {AuthorEditComponent} from './author/author-edit/author-edit.component';
import {AuthorAddComponent} from './author/author-add/author-add.component';
import {AuthorRemoveComponent} from './author/author-remove/author-remove.component';
import {BooksComponent} from './books/books.component';
import {BooksEditComponent} from './books/books-edit/books-edit.component';
import {BooksAddComponent} from './books/books-add/books-add.component';
import {BooksRemoveComponent} from './books/books-remove/books-remove.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthorFilterComponent} from './author/author-filter/author-filter.component';
import {BookFilterComponent} from './books/book-filter/book-filter.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'author',
    component: AuthorComponent,
  },
  {
    path: 'author/:id',
    component: AuthorEditComponent
  },
  {
    path: 'new/author',
    component: AuthorAddComponent,
  },
  {
    path: 'author/list/:name',
    component: AuthorFilterComponent,
  },
  {
    path: 'del/author/:id',
    component: AuthorRemoveComponent,
  },
  {
    path: 'book',
    component: BooksComponent,
  },
  {
    path: 'book/:id',
    component: BooksEditComponent
  },
  {
    path: 'new/book',
    component: BooksAddComponent,
  },
  {
    path: 'del/book/:id',
    component: BooksRemoveComponent,
  },
  {
    path: 'book/list/:name',
    component: BookFilterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
