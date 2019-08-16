import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksAndMoviesComponent } from './components/books&movies.component';
import { ArtRoutingModule } from './books&movies-routing.module';
import { BookCardComponent } from './components/book-card/book-card.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { CreateComponent } from './components/create/create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

@NgModule({
  declarations: [
    BooksAndMoviesComponent,
    BookCardComponent,
    CreateBookComponent,
    CreateMovieComponent,
    CreateComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    ArtRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [BookService]
})
export class BooksAndMoviesModule { }
