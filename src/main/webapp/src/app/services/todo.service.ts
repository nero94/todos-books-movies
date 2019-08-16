import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getAll(params?): any {
    return this.http.get<any>(`${environment.baseUrl}/todos`, { params: params || {} });
  }

  create(title: string): any {
    return this.http.post<any>(`${environment.baseUrl}/todos`, { title });
  }

  update(todo: Todo): any {
    return this.http.put<any>(`${environment.baseUrl}/todos/${todo.id}`, todo);
  }

  delete(todo: Todo): any {
    return this.http.delete<any>(`${environment.baseUrl}/todos/${todo.id}`);
  }

}
