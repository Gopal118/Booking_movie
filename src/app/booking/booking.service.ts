import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScreenData } from './model/screenData.model';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient) { }

  //to get screens for a particular movie
  getMovieScreens(movieid:number):Observable<ScreenData[]> {
    return this.httpClient.get<ScreenData[]>('http://localhost:8080/moviebooking/moviescreen/'+movieid);
  }

  //to get auditorium for a particular screen
  getAuditoriums(screenId:string):Observable<ScreenData>{
    return this.httpClient.get<ScreenData>('http://localhost:8080/moviebooking/screening/'+screenId)
  }

  
}
