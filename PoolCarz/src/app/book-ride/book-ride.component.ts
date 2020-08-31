import { RideFilterPipePipe } from './../ride-filter-pipe.pipe';
import { Component, OnInit } from '@angular/core';
import {RestServiceService} from '../Services/rest-service.service';
import {Ride} from './ride';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css']
})
export class BookRideComponent implements OnInit {
  rides:any=[];
  isShowall=false;
  filter='all';
  rideDetails=false;
  selectedRideObj:Object;
  showrideDetails=false;
  errorMessage:string;

  constructor(private _rideService:RestServiceService) {
    this._rideService.getRides().subscribe(
      rides=>{
        this._rideService.rides=rides;
        this.rides=this._rideService.rides;
      },error=>this.errorMessage=<any>error
    );
   }

  

  ngOnInit(): void {
  }
  showRides(): void {
    this.isShowall=!this.isShowall;
  }
  getRides(){
    if(localStorage.getItem('rides')===null){
      this._rideService.getRides().subscribe(
        rides =>{ localStorage.setItem('rides',JSON.stringify(rides)); this.rides=rides;},
        error => this.errorMessage=error
        );
    }
    else{
      this.rides=JSON.parse(localStorage.getItem('rides'));
    }
  }
  
  filterToOffice(){
    this.filter="toOffice"
    console.log(this.filter)
  }
  filterFromOffice(){
    this.filter="fromOffice"
  }
  filterOthers(){
    this.filter="others"
  }
  onBook(){
    this.isShowall=false;
  }
  showRideDetails(ride){
    this.selectedRideObj=ride;
    this.showrideDetails=true;
  }
}
