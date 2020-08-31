import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { map } from 'rxjs/operators';
import {Ride} from '../book-ride/ride';
import { Login } from '../login/Login';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {
  rides:any=[];

  constructor(private http:HttpClient) { }

  getRides(): Observable<Ride[]>{
    return this.http.get<Ride[]>('./assets/rides.json').pipe(catchError(this.handleError));

  }
  getRide(id:number):Observable<Ride>{
    return this.getRides().pipe(map(rides => rides.filter(ride =>ride.id===id)[0]));

  }
  getUsers():Observable<Login[]>{
    return this.http.get<Login[]>('./assets/users.json').pipe(catchError(this.handleError));
  }

  private handleError(err:HttpErrorResponse){
    console.log(err);
    return Observable.throw(err.error() || 'Server Error');
  }
  addRide(Ride: any):void{
    this.rides.push(Ride)
  }
}
