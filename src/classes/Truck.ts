// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces  
import Vehicle from './Vehicle.js';  
import Motorbike from './Motorbike.js';  
import Car from './Car.js';  
import Wheel from './Wheel.js';  
import AbleToTow from '../interfaces/AbleToTow.js';  
  
// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface  
class Truck extends Vehicle implements AbleToTow {  
  // TODO: Declare properties of the Truck class  
  vin: string;  
  color: string;  
  make: string;  
  model: string;  
  year: number;  
  weight: number;  
  topSpeed: number;  
  wheels: Wheel[];  
  towingCapacity: number;  
  
  // TODO: Create a constructor that accepts the properties of the Truck class  
  constructor(  
   vin: string,  
   color: string,  
   make: string,  
   model: string,  
   year: number,  
   weight: number,  
   topSpeed: number,  
   wheels: Wheel[],  
   towingCapacity: number  
  ) {  
   super();  
   this.vin = vin;  
   this.color = color;  
   this.make = make;  
   this.model = model;  
   this.year = year;  
   this.weight = weight;  
   this.topSpeed = topSpeed;  
   if (wheels.length !== 4) {  
    this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];  
   } else {  
    this.wheels = wheels;  
   }  
   this.towingCapacity = towingCapacity;  
  }  
  
  // TODO: Implement the tow method from the AbleToTow interface  
  tow(vehicle: Truck | Motorbike | Car): void {  
   if (vehicle.weight <= this.towingCapacity) {  
    console.log(`Towing ${vehicle.make} ${vehicle.model}`);  
   } else {  
    console.log(`Cannot tow ${vehicle.make} ${vehicle.model}, too heavy`);  
   }  
  }  
  
  // TODO: Override the printDetails method from the Vehicle class  
 override  printDetails(): void {  
   super.printDetails();  
   console.log(`VIN: ${this.vin}`);  
   console.log(`Color: ${this.color}`);  
   console.log(`Make: ${this.make}`);  
   console.log(`Model: ${this.model}`);  
   console.log(`Year: ${this.year}`);  
   console.log(`Weight: ${this.weight} lbs`);  
   console.log(`Top Speed: ${this.topSpeed} mph`);  
   console.log(`Towing Capacity: ${this.towingCapacity} lbs`);  
   console.log(`Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`);  
   console.log(`Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`);  
   console.log(`Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`);  
   console.log(`Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`);  
  }  
}  
  
// Export the Truck class as the default export  
export default Truck;