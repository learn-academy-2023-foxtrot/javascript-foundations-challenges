//JavaScript Jest Challenges 9/6/23 

// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

//Pseudocode: 
//name: mentalStatus
//input: string of person's status 
//output: can or can't work 
//process: 
//function expression with a conditional 

describe("mentalStatus", () => {
    it("returns  drink coffee if you are tired and keep working if you are not tired.", () => {
        expect(mentalStatus("tired")).toEqual("drink coffee")
        expect(mentalStatus("not tired")).toEqual("keep working")
    })
})
//ReferenceError: mentalStatus is not defined


// Create the function that will make the test pass.
const mentalStatus = (personStatus) => {
    if (personStatus === "tired") {
        return "drink coffee"
    } else if (personStatus === "not tired") {
        return "keep working"
    } else {
        return "enter your status"
    }
}

//  PASS  ./jest.test.js


// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

//Pseudocode: 
//name: stressStatus
//input: a string of mental feeling 
//output: a string if user can relax or keep going 
//process:
//a function expression that makes a condition on users stress status 

describe("stressStatus", () => {
    it("returns relax if you are stressed and keep going if you are not stressed.", () => {
        expect(stressStatus("stressed")).toEqual("relax")
        expect(stressStatus("not stressed")).toEqual("keep going")
    })
})
//ReferenceError: stressStatus is not defined
// Create the function that will make the test pass.

const stressStatus = (checkStress) => {
    if (checkStress === "stressed") {
        return "relax"
    } else if (checkStress === "not stressed") {
        return "keep going"
    } else {
        return "please enter how you're feeling"
    }
}
//  PASS  ./jest.test.js

// Write the test for a function that returns "in budget" if a price is lower than $300.
/*
pseudo code:
name: testingBudget
input: number representing price.
output: string telling us if price in budget
process: function expression that inputs a number and uses conditionals to see if number is in budget and returns a string
*/
describe("testingBudget", () => {
    it("returns in budget if a price is lower than $300.", () => {
        
    })
})


// Create the function that will make the test pass.
// Write the test for a function that takes in two numbers and returns the smaller number.
// Create the function that will make the test pass.
// Write the test for a function that takes in one numbers and returns whether the number is odd.
// Create the function that will make the test pass.
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Create the function that will make the test pass.
// Write the test for a function called rick that returns "Morty".
// Create the function that will make the test pass.
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Create the function that will make the test pass.
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Create the function that will make the test pass.
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Create the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Create the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Create the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
// Create the function that will make the test pass.