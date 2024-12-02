// Import necessary classes  
import Cli from "./classes/Cli.js";  
import Truck from "./classes/Truck.js";  
import Car from "./classes/Car.js";  
import Motorbike from "./classes/Motorbike.js";  
import Wheel from "./classes/Wheel.js";  
  
// Create an array of vehicles  
const vehicles: (Car | Truck | Motorbike)[] = [];  
  
// Create a truck  
const truck1 = new Truck(  
  Math.random().toString(36).substring(2, 15),  
  "red",  
  "Ford",  
  "F-150",  
  2021,  
  5000,  
  120,  
  [],  
  10000  
);  
  
// Create a car with default wheels  
const car1 = new Car(  
  Math.random().toString(36).substring(2, 15),  
  'blue',  
  'Toyota',  
  'Camry',  
  2021,  
  3000,  
  130,  
  []  
);  
  
// Create a motorbike with custom wheels  
const motorbike1Wheels = [  
  new Wheel(17, "Michelin"),  
  new Wheel(17, "Michelin")  
];  
const motorbike1 = new Motorbike(  
  Math.random().toString(36).substring(2, 15),  
  "black",  
  "Harley Davidson",  
  "Sportster",  
  2021,  
  500,  
  125,  
  motorbike1Wheels  
);  
  
// Add vehicles to the array  
vehicles.push(truck1);  
vehicles.push(car1);  
vehicles.push(motorbike1);  
  
// Create a new instance of the Cli class  
const cli = new Cli(vehicles);  
  
// Start the CLI  
cli.startCli();
