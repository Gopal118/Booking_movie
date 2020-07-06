import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { Movies } from './movies.model';
import { Router } from '@angular/router'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies:Movies[];

  constructor(private moviesServices:MoviesService, private router: Router) { }

  ngOnInit() {
    this.getHomeMovies();
  }

  //get  all movies 
  getHomeMovies():void{
    this.moviesServices.getMovies()
    .subscribe(movies=>this.movies=movies);
  }

  
}
