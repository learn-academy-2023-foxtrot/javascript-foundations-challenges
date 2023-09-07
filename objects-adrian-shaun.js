const person = {
    firstName: "Arthur",
    lastName: "Dent",
    location: function(){
        console.log(`${this.firstName} ${this.lastName} is from planet ${this.homePlanet}.`)
    }
  }
  //Write the code that accesses the first name of the person object.
  //pseudocode:
  //object - person
  //input - first name
  //output - a string of someone's first name
  //process - assign the name and the variable using dot notation
let firstName = person.firstName
// Write the code that accesses the last name of the person object.
let lastName = person.lastName
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// pseudocode:
// input - new property
//output - string of s plsnet
//process - dot notation with a new value
person.homePlanet = "Earth"
console.log(person)
// Update the person object with a method that logs "Arthur Dent is from planet Earth".
// pseudocode:
//input - none
//output - full name of the person and home planet
//process - adding a method to the object with string interpolation and this keyword
person.location()


const product = {
    name: "chair",
    price: 24.99
  }

//   Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
//pseudocode:
//input - object
//output - string 
//process - string interpolation and dot notation
const describeProduct = (product) => {
    return `The product is a ${product.name}. It costs $${product.price}.`
}
console.log(describeProduct(product))
// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
//pseudocode:
//input - an object
//output - rounded total price
//process - use string interpolation, built in number methods
const totalWithTax = (product) => {
    let withTax = 1.07
    let totalPrice = product.price * withTax
    return totalPrice
}