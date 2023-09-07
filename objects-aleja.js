// const person = {
//     firstName: "Arthur",
//     lastName: "Dent"
// }
// Write the code that accesses the first name of the person object.
// console.log(person.firstName)
// // Write the code that accesses the last name of the person object.
// console.log(person.lastName)
// // Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// // const person = {
// //     firstName: "Arthur",
// //     lastName: "Dent",
// //     homePlanet: "Earth"
// // }
// // Update the person object with a method that logs "Arthur Dent is from planet Earth".
// const person = {
//     firstName: "Arthur",
//     lastName: "Dent",
//     homePlanet: "Earth",
//     information: function () {
//         return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
//     }
// }
// console.log(person.information())

//   Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
//   Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
// const product = {
//     name: "chair",
//     price: 24.99,
//     describeProduct: function () {
//         return `The product is a ${this.name}. It costs ${this.price}`
//     },
//     totalWithTax: function () {
//         let taxRate = 0.07
//         let taxAmound = this.price*taxRate
//         let totalPrice = Math.round(this.price + taxAmound)
//         return totalPrice
//     }
//   }
// console.log(product.totalWithTax());

const lunch = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread", "peanut butter", "banana"],
    food: function () {
        return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients[0]},${this.ingredients[1]}, and ${this.ingredients[2]}.`
    }
  }
//   Write the code that accesses the ingredients property.
console.log(lunch.ingredients)
//   Write the code that access the third ingredient of the lunch object.
console.log(lunch.ingredients[2])
//   Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
console.log(lunch.food());
//   Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
