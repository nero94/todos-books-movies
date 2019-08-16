import { MovieService } from './../../../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss']
})
export class CreateMovieComponent implements OnInit {

  movieForm: FormGroup;
  actors: Person[] = [];

  constructor(private router: Router, private movieService: MovieService) { }

  ngOnInit() {
    this.movieForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      year: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
      country: new FormControl(),
      budget: new FormControl(null, [Validators.required, Validators.min(1)]),
      studio: new FormControl()
    });
  }

  save() {
    const data = Object.assign(this.movieForm.value, { actors: this.actors });
    this.movieService.create(data).subscribe(console.log);
    this.cancel();
  }

  cancel() {
    this.router.navigateByUrl('/books-and-movies').then(() => {
      window.location.reload();
    });
  }

  addActor(name: string) {
    this.actors.push({ name });
  }

}
