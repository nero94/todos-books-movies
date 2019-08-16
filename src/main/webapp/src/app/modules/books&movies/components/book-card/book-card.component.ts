import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import { Status } from 'src/app/models/status.enum';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() book: Book;
  @Output() delete = new EventEmitter();

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  deleteHandler() {
    this.bookService.delete(this.book).subscribe(() => {
      this.delete.emit(this.book);
    });
  }

  markAsRead() {
    this.book.status = Status.DONE;
    this.bookService.update(this.book).subscribe(console.log);
  }

}
