import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoService } from 'src/app/services/todo.service';
import { TodoListComponent } from 'src/app/modules/todo/components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TodoRoutingModule,
    FormsModule
  ],
  providers: [TodoService]
})
export class TodoModule { }
