import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieCatalogComponent } from './movie-catalog/movie-catalog.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { CreatingMovieComponent } from './creating-movie/creating-movie.component';


@NgModule({
  declarations: [MovieCatalogComponent, MovieDetailComponent, CreatingMovieComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
