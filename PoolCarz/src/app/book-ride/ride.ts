//Ride model
export class Ride{
    constructor(
        public id:number,
        public offeringId:string,
        public name:string,
        public car:string,
        public seatsLeft:number,
        public pickUp:string,
        public desitnation:string
    ){

    }
}