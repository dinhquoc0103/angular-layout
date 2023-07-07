import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

const routes: Routes = [
  // { path: '', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) },
  // { path: 'home', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) },
  // { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  // { path: 'movies', loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesModule) },
  // { path: '**', loadChildren: () => import('./pages/errors/errors.module').then(m => m.ErrorsModule) },

  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) },
      { path: 'movies', loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesModule) },
      { path: 'news', loadChildren: () => import('./pages/news/news.module').then(m => m.NewsModule) },
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
