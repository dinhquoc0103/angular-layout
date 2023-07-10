import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creating-movie',
  templateUrl: './creating-movie.component.html',
  styleUrls: ['./creating-movie.component.scss']
})
export class CreatingMovieComponent implements OnInit {
  movieName: string = 'The walking dead - Dead city';
  year: number = 2023;
  onCreating: boolean = true;
  // listClass: string = 'movie-style movie-color';
  // listClass: object = {
  //   ['movie-style']: true,
  //   ['movie-color']: true,
  // };
  listClass: object = ['movie-style', 'movie-color'];

  constructor() { }

  ngOnInit(): void {
  }

  createName(name: string): string {
    return `New name: ${name}`;
  }

  onSubmitForm(event: unknown): void {
    console.log(event);
  }
}
