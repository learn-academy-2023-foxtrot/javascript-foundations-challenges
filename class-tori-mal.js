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