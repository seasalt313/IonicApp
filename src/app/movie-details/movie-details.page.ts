import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service'
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  information = null;

  /**
   * Constructor of our details page
   * @param activatedRoute Information about the route we are on
   * @param movieService The movie service to get data
   */
  constructor() { }

  ngOnInit() {
  }

}
