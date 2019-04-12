
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tabs/movies', loadChildren: './movies/movies.module#MoviesPageModule' },
  { path: 'movies/:id', outlet: 'movies', loadChildren: './movie-details/movie-details.module#MovieDetailsPageModule' },
  { path: 'movie-stuff', loadChildren: './movie-stuff/movie-stuff.module#MovieStuffPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


