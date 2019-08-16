import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAll(params?): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.baseUrl}/books`, {
      params: params || {}
    }).pipe(map(res => res.map(obj => new Book(obj))));
  }

  create(book): any {
    return this.http.post<any>(`${environment.baseUrl}/books`, book);
  }

  update(book): any {
    return this.http.put<any>(`${environment.baseUrl}/movies/${book.id}`, book);
  }

  delete(book): any {
    return this.http.delete<any>(`${environment.baseUrl}/books/${book.id}`);
  }

}
