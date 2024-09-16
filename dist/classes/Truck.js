// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle {
    // TODO: Declare properties of the Truck class
    // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
    // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
    constructor(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        super();
        // Initialize properties of the Car class
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.towingCapacity = towingCapacity;
        if (wheels.length !== 4) {
            this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
        }
        else {
            this.wheels = wheels;
        }
    }
    // TODO: Create a constructor that accepts the properties of the Truck class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Truck class
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    // TODO: Implement the tow method from the AbleToTow interface
    tow(vehicle) {
        const { make, model, weight } = vehicle;
        if (weight <= this.towingCapacity) {
            console.log(`Towing ${make} ${model} with a towing capacity of ${this.towingCapacity}lbs`);
        }
        else {
            console.log(`Cannot tow ${make} ${model} because it exceeds the towing capacity of ${this.towingCapacity}lbs`);
        }
    }
    // TODO: Get the make an model of the vehicle if it exists
    // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
    // TODO: If it is, log that the vehicle is being towed
    // TODO: If it is not, log that the vehicle is too heavy to be towed
    // TODO: Override the printDetails method from the Vehicle class
    // TODO: The method should call the printDetails method of the parent class
    // TODO: The method should log the details of the Truck
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
    printDetails() {
        super.printDetails();
        console.log(`VIN: ${this.vin}`);
        console.log(`make: ${this.make}`);
        console.log(`model: ${this.model}`);
        console.log(`year: ${this.year}`);
        console.log(`weight: ${this.weight}`);
        console.log(`topSpeed: ${this.topSpeed}`);
        console.log(`color: ${this.color}`);
        console.log(`towingCapacity: ${this.towingCapacity}`);
        console.log(`wheels: ${this.wheels}`);
    }
}
// Export the Truck class as the default export
export default Truck;
