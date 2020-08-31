import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-ride-details-component',
  templateUrl: './ride-details-component.component.html',
  styleUrls: ['./ride-details-component.component.css']
})
export class RideDetailsComponentComponent implements OnInit {
  rideDetails:any= {id:1,offerId:'offering01',name:'James',car:'Innova',seatsLeft:3,pickUp:'Office',destination:'Madhapur'};
  isBookingDone=false;
  errorMessage:string;
  rides:any=[];
  @Input() selectedRide:Object;
  @Output() onBook=new EventEmitter<boolean>();

  

  ngOnInit(): void {
  }
  onBookClick(){
    this.isBookingDone=true;
    this.onBook.emit(true);
  }
  
}
