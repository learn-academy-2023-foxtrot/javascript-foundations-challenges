// Coffee Maker: copy the given Coffee class into a text editor

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

// Write the code that makes a black coffee object

// const blackCoffee = new Coffee("black coffee", 0, 0)

// console.log(blackCoffee)

// Write the code that outputs the black coffee's profile

// console.log(blackCoffee.coffeeProfile())

// Write the code that makes a coffee object with 1 cream and 2 sugars

// const coffeeDrink = new Coffee("hot", 1, 2)

// console.log(coffeeDrink)

// Write the code that outputs the 1 cream and 2 sugars coffee profile

// console.log(coffeeDrink.coffeeProfile())




// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots

class Latte {
  constructor(flavor, milk, shots) {
    this.flavor = flavor
    this.milk = milk
    this.shots = shots
  }
  latteProfile() {
    return `A ${this.flavor} latte with ${this.milk} milk and ${this.shots} shot(s)`
  }
}

// Write a method for your Latte class that outputs the latte's profile
//latteProfile() {
//   return `A ${this.flavor} latte with ${this.milk()}, ${this.shots()}`
// }
// Write the code that makes a regular, single shot latte
const newLatte = new Latte("regular", "2%", 1)
console.log(newLatte)
// Log the regular, single shot latte's profile
console.log(newLatte.latteProfile())
// Write the code that makes a double shot, hazelnut latte with almond milk.
const hazLatte = new Latte("hazelnut", "almond", 2)
console.log(hazLatte)
// Log the double shot, hazelnut latte with almond milk's profile.
console.log(hazLatte.latteProfile())
// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects