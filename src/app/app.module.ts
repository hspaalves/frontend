import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import {HttpClientModule} from '@angular/common/http';
import { AuthorAddComponent } from './author/author-add/author-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorEditComponent } from './author/author-edit/author-edit.component';
import { AuthorRemoveComponent } from './author/author-remove/author-remove.component';
import { BooksComponent } from './books/books.component';
import { BooksAddComponent } from './books/books-add/books-add.component';
import { BooksRemoveComponent } from './books/books-remove/books-remove.component';
import { BooksEditComponent } from './books/books-edit/books-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatButtonModule} from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { AuthorDetailComponent } from './author/author-detail/author-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    AuthorAddComponent,
    AuthorEditComponent,
    AuthorRemoveComponent,
    BooksComponent,
    BooksAddComponent,
    BooksRemoveComponent,
    BooksEditComponent,
    DashboardComponent,
    BookDetailComponent,
    AuthorDetailComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxPaginationModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
