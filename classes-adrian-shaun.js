class Coffee {
    constructor(type, cream, sugar) {
      this.type = type.toLowerCase()
      this.cream = cream
      this.sugar = sugar

    }
  
    coffeeProfile() {
      return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
    }
  
    creams() {
      if (this.cream > 1) {
        return `${this.cream} creams`
      } else {
        return `${this.cream} cream`
      }
    }
  
    sugars() {
      if (this.sugar > 1) {
        return `${this.sugar} sugars`
      } else {
        return `${this.sugar} sugar`
      }

    
    }
  }

  const blackCoffee = new Coffee("black", 0, 0);
console.log(blackCoffee.coffeeProfile());

const customCoffee = new Coffee("tan", 1, 2);
console.log(customCoffee.coffeeProfile());

//   Coffee Maker: copy the given Coffee class into a text editor
/*
Pseudo code:
input: create new object in class
output: coffee profile in a string
process: using constructor to make a string interpolation
*/

// Write the code that makes a black coffee object
// Write the code that outputs the black coffee's profile
// Write the code that makes a coffee object with 1 cream and 2 sugars
// Write the code that outputs the 1 cream and 2 sugars coffee profile



// Latte Maker: create a class for Latte
/*
Pseudo Code:
input: Making a class
output: object 
process: using constructor method to create a class
*/
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte
// Log the regular, single shot latte's profile
// Write the code that makes a double shot, hazelnut latte with almond milk.
// Log the double shot, hazelnut latte with almond milk's profile.

class Latte {
    constructor(flavor, milkType, numOfShots) {
        this.flavor = flavor;
        this.milkType = milkType;
        this.numOfShots = numOfShots;
    }
    regularProfile() {
        return `A ${this.flavor} latte with ${this.milkType} milk and ${this.numOfShots} shots.`;
    }

}

const regular = new Latte("regular","whole", 1);
console.log(regular.regularProfile());

const hazelnut = new Latte("hazelnut", "almonds", 2);
console.log(hazelnut.regularProfile())










// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects

/*
input: class object
output: volume value
process: using constructor method to create parameters for height, radius, and empty array that holds volume formula
*/

class Cylinder {
    constructor(radius, height, volume){
        this.radius = radius;
        this.height = height;
        this.volume = volume;
    } 
    calculateCylinder() {
        const volume = Math.PI * Math.pow(this.radius * 2) * this.height;
        return volume.toFixed(4);
    }
}   


const cylinderOne = new Cylinder(5, 10);

console.log("Volume = ", cylinderOne.calculateCylinder());