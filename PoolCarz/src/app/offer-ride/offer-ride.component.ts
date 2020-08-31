import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Ride} from '../book-ride/ride';
import {RestServiceService} from '../Services/rest-service.service';
import {Offerride} from './Offerride';

@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.component.html',
  styleUrls: ['./offer-ride.component.css']
})
export class OfferRideComponent implements OnInit {
  registerForm: FormGroup;
  rides:any[];
  successMsg:string;
  offerRide=new Offerride();
  constructor(private formBuilder:FormBuilder,private _rideServie:RestServiceService) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      name:['',Validators.required],
      pickup:['',Validators.required],
      destination:['',Validators.required],
      car:['',Validators.required],
      seatsLeft:['',Validators.required,validateSeatsAvailable],

    });
  }
  
  addRide(){
    const rides=localStorage.getItem('rides')!=null?JSON.parse(localStorage.getItem('rides')):[];
    const postObj={id:rides.length+1,bookedby:sessionStorage.getItem('userName')};
    for (const rideproperty in this.offerRide){
      if(!postObj.hasOwnProperty(rideproperty)){
        postObj[rideproperty]=this.registerForm.controls[rideproperty].value;
      }
    }
    rides.push(postObj);
    localStorage.setItem('rides',JSON.stringify(rides));
    this.successMsg='Added Successfully';
  }
}
function validateSeatsAvailable(c:FormControl){
  console.log("in validateSeats");
  let errorMessage="Seats cant be greater than 10";
  if(c.value>10){
    return {invalidSeats:errorMessage};
  }
  else{
    return null;
  }
  
}