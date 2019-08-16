import { BookService } from './../../../../services/book.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  @Output() delete = new EventEmitter();
  bookForm: FormGroup;

  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit() {
    this.bookForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      author: new FormGroup({
        name: new FormControl(null, Validators.required)
      }),
      year: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
      pages: new FormControl(null, [Validators.required, Validators.min(1)]),
      publishingHouse: new FormGroup({
        name: new FormControl(null, Validators.required),
        year: new FormControl(null, [Validators.minLength(4), Validators.maxLength(4)]),
        city: new FormControl(),
        country: new FormControl(),
        phone: new FormControl()
      })
    });
  }

  save() {
    this.bookService.create(this.bookForm.value).subscribe(console.log);
    this.cancel();
  }

  cancel() {
    this.router.navigateByUrl('/books-and-movies').then(() => {
      window.location.reload();
    });
  }

}
