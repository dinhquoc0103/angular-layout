import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieNewsComponent } from './movie-news/movie-news.component';

const routes: Routes = [
  { path: '', redirectTo: 'movie-news', pathMatch: 'full' },
  { path: 'movie-news', component: MovieNewsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
