import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book.model';
import { merge } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';
import { Status } from 'src/app/models/status.enum';

@Component({
  selector: 'app-books-and-movies',
  templateUrl: './books&movies.component.html',
  styleUrls: ['./books&movies.component.scss']
})
export class BooksAndMoviesComponent implements OnInit {

  data: (Book | Movie)[] = [];
  isCreateMode = false;

  constructor(private bookService: BookService, private movieService: MovieService) { }

  ngOnInit() {
    const books = this.bookService.getAll();
    const movies = this.movieService.getAll();

    merge(books, movies).subscribe(result => {
      this.data = this.data.concat(result);
    });
  }

  isBook(obj: any) {
    return obj instanceof Book;
  }

  deleteItem(movie: Movie) {
    this.data = this.data.filter(item => item !== movie);
  }

  toogleShowActiveOnly(event) {
    const params: any = {};
    if (event.target.checked) {
      params.status = Status.ACTIVE;
    }
    this.data = [];
    const books = this.bookService.getAll(params);
    const movies = this.movieService.getAll(params);

    merge(books, movies).subscribe(result => {
      this.data = this.data.concat(result);
    });
  }

}
