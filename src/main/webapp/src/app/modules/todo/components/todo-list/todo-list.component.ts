import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';
import { Status } from 'src/app/models/status.enum';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  isCreateMode = false;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getAll().subscribe(data => {
      this.todos = data;
    });
  }

  saveOrCreateTodo(todo: Todo) {
    if (todo.id) {
      this.todoService.update(todo).subscribe(data => todo = data);
    } else {
      this.todoService.create(todo.title).subscribe(data => this.todos.unshift(data));
    }
    this.isCreateMode = false;
  }

  deleteTodo(todo: Todo) {
    this.todoService.delete(todo).subscribe(() => this.todos = this.todos.filter(entry => entry !== todo));
    this.isCreateMode = false;
  }

  newTodo(): Todo {
    return {
      id: null,
      title: '',
      status: Status.ACTIVE
    };
  }

  toogleShowActiveOnly(event) {
    const params: any = {};
    if (event.target.checked) {
      params.status = Status.ACTIVE;
    }
    this.todoService.getAll(params).subscribe(data => {
      this.todos = data;
    });
  }

}
