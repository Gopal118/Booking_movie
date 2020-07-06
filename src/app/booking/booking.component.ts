import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Movies } from '../movies/movies.model';
import { Location } from '@angular/common';
import { BookingService } from './booking.service';
import { ScreenData } from './model/screenData.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  //to store movie name
  movie: Movies;

  //to store movie screenings
  screens:ScreenData[];

  auditorium:ScreenData;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private location: Location,
    private bookingService:BookingService
  ) { }

  ngOnInit() {
    this.getHomeMovie();
    this.getMovieScreen();
  }

  //to get movie details
  getHomeMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
     this.moviesService.getMovie(id)
      .subscribe(movie => {
        this.movie = movie
      });
      
  }


//to go back
  goBack(): void {
    this.location.back();
  }


  //to get movie screening details
  getMovieScreen():void{
    const id = +this.route.snapshot.paramMap.get('id');
  
     this.bookingService.getMovieScreens(id)
    .subscribe(screens=>
        this.screens=screens
        );
  }


//to get auditorium for a screen
  onScreenSelected(val:string){
  this.bookingService.getAuditoriums(val)
  .subscribe(auditorium=>{
    this.auditorium=auditorium
  });
  }

  get



}
