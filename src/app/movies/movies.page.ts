import { Component, OnInit } from '@angular/core';
import { MovieService, SearchType } from "../services/movie.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;

  /**
   * Constructor of our first page
   * @param movieService The move service to get data
   */

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    console.log('this ===========', this);

  }

  searchChanged() {
    //Call our service function which returns an Observable
    this.results = this.movieService.searchData(this.searchTerm, this.type)
  }

}
