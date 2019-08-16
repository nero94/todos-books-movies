import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../models/movie.model';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getAll(params?): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${environment.baseUrl}/movies`, {
      params: params || {}
    }).pipe(map(res => res.map(obj => new Movie(obj))));
  }

  create(movie): any {
    console.log(movie);
    return this.http.post<any>(`${environment.baseUrl}/movies`, movie);
  }

  update(movie): any {
    return this.http.put<any>(`${environment.baseUrl}/movies/${movie.id}`, movie);
  }

  delete(movie): any {
    return this.http.delete<any>(`${environment.baseUrl}/movies/${movie.id}`);
  }
}
