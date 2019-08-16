import { Status } from './../../../../models/status.enum';
import { MovieService } from 'src/app/services/movie.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movie;
  @Output() delete = new EventEmitter();

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  deleteHandler() {
    this.movieService.delete(this.movie).subscribe(() => {
      this.delete.emit(this.movie);
    });
  }

  markAsViewed() {
    this.movie.status = Status.DONE;
    this.movieService.update(this.movie).subscribe(console.log);
  }

}
