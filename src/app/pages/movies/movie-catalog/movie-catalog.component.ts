import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/shared/models/movies.model';

@Component({
  selector: 'app-movie-catalog',
  templateUrl: './movie-catalog.component.html',
  styleUrls: ['./movie-catalog.component.scss']
})
export class MovieCatalogComponent implements OnInit {
  title: string = 'Movies';
  movieList: Array<Movies> = [
    { id: 1, movieName: "Fast X", year: 2023 },
    { id: 2, movieName: "Fear the walking dead season 8", year: 2023 },
    { id: 3, movieName: "The walking dead - Dead city", year: 2023 },
    { id: 4, movieName: "From season 2", year: 2023 },
    { id: 5, movieName: "Guardians of the galaxy", year: 2023 },
    { id: 6, movieName: "HiJack", year: 2023 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
