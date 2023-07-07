import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarRoute = {
    home: 'home',
    movies: 'movies',
    login: 'auth/login',
    register: 'auth/register',
    news: 'news',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
