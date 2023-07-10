import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Movies } from 'src/app/shared/models/movies.model';
import { MoviesService } from '../shared/services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movieList: Array<Movies> = [
    { id: 1, movieName: "Fast X", year: 2023 },
    { id: 2, movieName: "Fear the walking dead season 8", year: 2023 },
    { id: 3, movieName: "The walking dead - Dead city", year: 2023 },
    { id: 4, movieName: "From season 2", year: 2023 },
    { id: 5, movieName: "Guardians of the galaxy", year: 2023 },
    { id: 6, movieName: "HiJack", year: 2023 },
  ];
  movieId: number = 0;
  movie: Movies = {
    id: 0,
    movieName: '',
    year: 0
  };

  constructor(private router: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((paramMap: ParamMap) => {
      this.movieId = Number(paramMap.get('id'));
      this.movie = this.moviesService.getMovieById(this.movieId, this.movieList);
      console.log(this.movie);

    })

  }

}
