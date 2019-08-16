import { Status } from './../../../../models/status.enum';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  @Input() editMode: boolean;
  @Output() save = new EventEmitter();
  @Output() delete = new EventEmitter();

  todoForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.todoForm = new FormGroup({
      title: new FormControl(this.todo.title)
    });
  }

  deleteHandler(todo: Todo) {
    this.delete.emit(todo);
  }

  updateHandler() {
    this.todo = Object.assign(this.todo, this.todoForm.value);
    this.save.emit(this.todo);
    this.editMode = false;
  }

  toggleStatus() {
    this.todo.status = this.isCompleted() ? Status.ACTIVE : Status.DONE;
    this.save.emit(this.todo);
  }

  isCompleted() {
    return this.todo.status === Status.DONE;

  }

}
