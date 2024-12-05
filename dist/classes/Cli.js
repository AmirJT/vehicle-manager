import inquirer from "inquirer";
import Car from "./Car.js";
import Truck from "./Truck.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";
class Cli {
    constructor(vehicles) {
        this.exit = false;
        this.vehicles = vehicles;
    }
    chooseVehicle() {
        inquirer
            .prompt([
            {
                type: 'list',
                name: 'selectedVehicleVin',
                message: 'Select a vehicle to perform an action on',
                choices: this.vehicles.map((vehicle) => {
                    return {
                        name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
                        value: vehicle.vin,
                    };
                }),
            },
        ])
            .then((answers) => {
            this.selectedVehicleVin = answers.selectedVehicleVin;
            this.performActions();
        });
    }
    createVehicle() {
        inquirer
            .prompt([
            {
                type: 'list',
                name: 'vehicleType',
                message: 'Select a vehicle type',
                choices: ['Car', 'Truck', 'Motorbike'],
            },
        ])
            .then((answers) => {
            if (answers.vehicleType === 'Car') {
                this.createCar();
            }
            else if (answers.vehicleType === 'Truck') {
                this.createTruck();
            }
            else if (answers.vehicleType === 'Motorbike') {
                this.createMotorbike();
            }
        });
    }
    createCar() {
        inquirer
            .prompt([
            {
                type: 'input',
                name: 'color',
                message: 'Enter Color',
            },
            {
                type: 'input',
                name: 'make',
                message: 'Enter Make',
            },
            {
                type: 'input',
                name: 'model',
                message: 'Enter Model',
            },
            {
                type: 'input',
                name: 'year',
                message: 'Enter Year',
            },
            {
                type: 'input',
                name: 'weight',
                message: 'Enter Weight',
            },
            {
                type: 'input',
                name: 'topSpeed',
                message: 'Enter Top Speed',
            },
        ])
            .then((answers) => {
            const car = new Car(Math.random().toString(36).substring(2, 15), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), []);
            this.vehicles.push(car);
            this.selectedVehicleVin = car.vin;
            this.performActions();
        });
    }
    createTruck() {
        inquirer
            .prompt([
            {
                type: 'input',
                name: 'color',
                message: 'Enter Color',
            },
            {
                type: 'input',
                name: 'make',
                message: 'Enter Make',
            },
            {
                type: 'input',
                name: 'model',
                message: 'Enter Model',
            },
            {
                type: 'input',
                name: 'year',
                message: 'Enter Year',
            },
            {
                type: 'input',
                name: 'weight',
                message: 'Enter Weight',
            },
            {
                type: 'input',
                name: 'topSpeed',
                message: 'Enter Top Speed',
            },
            {
                type: 'input',
                name: 'towingCapacity',
                message: 'Enter Towing Capacity',
            },
        ])
            .then((answers) => {
            const truck = new Truck(Math.random().toString(36).substring(2, 15), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), [], parseInt(answers.towingCapacity));
            this.vehicles.push(truck);
            this.selectedVehicleVin = truck.vin;
            this.performActions();
        });
    }
    createMotorbike() {
        inquirer
            .prompt([
            {
                type: 'input',
                name: 'color',
                message: 'Enter Color',
            },
            {
                type: 'input',
                name: 'make',
                message: 'Enter Make',
            },
            {
                type: 'input',
                name: 'model',
                message: 'Enter Model',
            },
            {
                type: 'input',
                name: 'year',
                message: 'Enter Year',
            },
            {
                type: 'input',
                name: 'weight',
                message: 'Enter Weight',
            },
            {
                type: 'input',
                name: 'topSpeed',
                message: 'Enter Top Speed',
            },
            {
                type: 'input',
                name: 'frontWheelDiameter',
                message: 'Enter Front Wheel Diameter',
            },
            {
                type: 'input',
                name: 'frontWheelBrand',
                message: 'Enter Front Wheel Brand',
            },
            {
                type: 'input',
                name: 'rearWheelDiameter',
                message: 'Enter Rear Wheel Diameter',
            },
            {
                type: 'input',
                name: 'rearWheelBrand',
                message: 'Enter Rear Wheel Brand',
            },
        ])
            .then((answers) => {
            const motorbike = new Motorbike(Math.random().toString(36).substring(2, 15), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), [
                new Wheel(parseInt(answers.frontWheelDiameter), answers.frontWheelBrand),
                new Wheel(parseInt(answers.rearWheelDiameter), answers.rearWheelBrand),
            ]);
            this.vehicles.push(motorbike);
            this.selectedVehicleVin = motorbike.vin;
            this.performActions();
        });
    }
    findVehicleToTow(truck) {
        inquirer
            .prompt([
            {
                type: 'list',
                name: 'vehicleToTow',
                message: 'Select a vehicle to tow',
                choices: this.vehicles.map((vehicle) => {
                    return {
                        name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
                        value: vehicle,
                    };
                }),
            },
        ])
            .then((answers) => {
            if (answers.vehicleToTow.vin === truck.vin) {
                console.log('Cannot tow itself');
                this.performActions();
            }
            else {
                truck.tow(answers.vehicleToTow);
                this.performActions();
            }
        });
    }
    performActions() {
        inquirer
            .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Select an action',
                choices: [
                    'Print details',
                    'Start vehicle',
                    'Accelerate 5 MPH',
                    'Decelerate 5 MPH',
                    'Stop vehicle',
                    'Turn right',
                    'Turn left',
                    'Reverse',
                    'Tow',
                    'Wheelie',
                    'Select or create another vehicle',
                    'Exit',
                ],
            },
        ])
            .then((answers) => {
            if (answers.action === 'Print details') {
                const vehicle = this.vehicles.find((v) => v.vin === this.selectedVehicleVin);
                if (vehicle) {
                    vehicle.printDetails();
                }
            }
            else if (answers.action === 'Start vehicle') {
                const vehicle = this.vehicles.find((v) => v.vin === this.selectedVehicleVin);
                if (vehicle) {
                    vehicle.start();
                }
            }
            else if (answers.action === 'Accelerate 5 MPH') {
                const vehicle = this.vehicles.find((v) => v.vin === this.selectedVehicleVin);
                if (vehicle) {
                    vehicle.accelerate(5);
                }
            }
            else if (answers.action === 'Decelerate 5 MPH') {
                const vehicle = this.vehicles.find((v) => v.vin === this.selectedVehicleVin);
                if (vehicle) {
                    vehicle.decelerate(5);
                }
            }
            else if (answers.action === 'Stop vehicle') {
                const vehicle = this.vehicles.find((v) => v.vin === this.selectedVehicleVin);
                if (vehicle) {
                    vehicle.stop();
                }
            }
            else if (answers.action === 'Turn right') {
                const vehicle = this.vehicles.find((v) => v.vin === this.selectedVehicleVin);
                if (vehicle) {
                    vehicle.turn('right');
                }
            }
            else if (answers.action === 'Turn left') {
                const vehicle = this.vehicles.find((v) => v.vin === this.selectedVehicleVin);
                if (vehicle) {
                    vehicle.turn('left');
                }
            }
            else if (answers.action === 'Reverse') {
                const vehicle = this.vehicles.find((v) => v.vin === this.selectedVehicleVin);
                if (vehicle) {
                    vehicle.reverse();
                }
            }
            else if (answers.action === 'Tow') {
                const truck = this.vehicles.find((v) => v.vin === this.selectedVehicleVin);
                if (truck) {
                    this.findVehicleToTow(truck);
                    return;
                }
                else {
                    console.log('Only trucks can tow');
                    this.performActions();
                }
            }
            else if (answers.action === 'Wheelie') {
                const motorbike = this.vehicles.find((v) => v.vin === this.selectedVehicleVin);
                if (motorbike) {
                    motorbike.wheelie();
                    this.performActions();
                }
                else {
                    console.log('Only motorbikes can do wheelies');
                    this.performActions();
                }
            }
            else if (answers.action === 'Select or create another vehicle') {
                this.startCli();
                return;
            }
            else {
                this.exit = true;
            }
            if (!this.exit) {
                this.performActions();
            }
        });
    }
    startCli() {
        inquirer
            .prompt([
            {
                type: 'list',
                name: 'CreateOrSelect',
                message: 'Would you like to create a new vehicle or perform an action on an existing vehicle?',
                choices: ['Create a new vehicle', 'Select an existing vehicle'],
            },
        ])
            .then((answers) => {
            if (answers.CreateOrSelect === 'Create a new vehicle') {
                this.createVehicle();
            }
            else {
                this.chooseVehicle();
            }
        });
    }
}
export default Cli;
