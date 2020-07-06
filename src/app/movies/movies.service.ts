import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from './movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private  httpClient: HttpClient ) {}

  getMovies():Observable<Movies[]>{
    return this.httpClient.get<Movies[]>('http://localhost:8080/moviebooking/movies');
  }
  
  getMovie(movieId:number):Observable<Movies>{
  
    return this.httpClient.get<Movies>('http://localhost:8080/moviebooking/movies/'+ movieId);
  }
}
