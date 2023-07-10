import { Injectable } from '@angular/core';
import { Movies } from 'src/app/shared/models/movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMovieById(movieId: number, movieList: Array<Movies>) {
    let movie: (Movies | undefined) = movieList.find(movie => movie.id === movieId);
    if (movie === undefined) {
      movie = {
        id: 0,
        movieName: '',
        year: 0
      };
    }
    return movie;
  }
}
