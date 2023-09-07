const person = {
    firstName: "Arthur",
    lastName: "Dent",
    homePlanet: "Earth",
    whereFrom: function() {
        return `${this.firstName} ${this.lastName} is from ${this.homePlanet}`
    }
  }

//   Write the code that accesses the first name of the person object.
// Write the code that accesses the last name of the person object.
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// Update the person object with a method that logs "Arthur Dent is from planet Earth".

console.log(person.firstName)
console.log(person.lastName)
console.log(person.homePlanet)
console.log(person.whereFrom())
// pseudo code 
// name : 
// input : object
// output : string 
// process : string interpulation 

const product = {
    name: "chair",
    price: 24.99,
    describeProduct: function() {
        return `the product is a ${this.name}. It costs $${this.price}. `
    }
  }
  console.log(product.describeProduct())

//   Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

// pseudo code
// name : describeProduct 
// input : object
// output : a line of string that names the object and cost
// process : string interpulation

