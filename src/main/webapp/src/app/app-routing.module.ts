import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'todos',
    loadChildren: () => import('./modules/todo/todo.module').then(mod => mod.TodoModule)
  },
  {
    path: 'books-and-movies',
    loadChildren: () => import('./modules/books&movies/books&movies.module').then(mod => mod.BooksAndMoviesModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
