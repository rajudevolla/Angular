import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rideFilterPipe'
})
export class RideFilterPipePipe implements PipeTransform {

  transform(rides: any[], args?:string): any[] {
    console.log(args+" in filter")
    if(args=="fromOffice"){
      console.log("into if  loop args is from Office")
      return rides.filter(ride =>ride.pickUp=="Office")
      // console.log(rides)
      // return rides
    }
    else if (args=="toOffice"){
      console.log("into the else loop args is to Office")
      return rides.filter(ride =>ride.destination=="Office")
      
      
      
    }
    else if (args=="others"){
      console.log("into the else if others")
      return rides.filter(ride =>ride.destination!="Office" && ride.pickUp!='Office')
      // console.log(rides)
      // return rides
    }
    else{
      return rides
    }
  }

}
