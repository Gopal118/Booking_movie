import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { logging } from 'protractor';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { BookingComponent } from './booking/booking.component';


const routes: Routes = [
  {path:'',redirectTo:'/movies',pathMatch:'full'},
  {path:"movies",component:MoviesComponent},
  {path:"login",component:LoginComponent},
  {path:"booking/:id",component:BookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
