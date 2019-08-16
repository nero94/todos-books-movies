import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksAndMoviesComponent } from './components/books&movies.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
    {
        path: '',
        component: BooksAndMoviesComponent
    },
    {
        path: 'create',
        component: CreateComponent,
        children: [
            { path: '', redirectTo: 'book', pathMatch: 'full' },
            {
                path: 'book',
                component: CreateBookComponent
            },
            {
                path: 'movie',
                component: CreateMovieComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArtRoutingModule { }
