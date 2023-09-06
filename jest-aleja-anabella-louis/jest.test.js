// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
describe("coffee", () => {
    it ("returns different statements if you are tired or not", () => {
        expect (coffee("yes")).toEqual("drink coffee")
        expect (coffee("no")).toEqual("keep working")
    })
})
// Create the function that will make the test pass.
// Psuedo:
// name of function: coffee
// input: string - yes or no
// output: two lines of string - either drink coffee or keep working - catch all try again
// process: conditionl statement to return if string is yes or no

const coffee = (string) => {
    if (string === "yes") {
        return "drink coffee"
    }
    else if (string === "no") {
        return "keep working"
    }
     else {
        return "try again"
     } 
}
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
describe ("relaxing", () => {
    it ("return different statements based on a yes or no answer", () => {
        expect(relaxing ("yes")).toEqual("relax")
        expect(relaxing ("no")).toEqual("keep going")
    })
})
// Create the function that will make the test pass.
const relaxing = (string) => {
    if (string === "yes") {
        return "relax"
    }
    else if (string === "no") {
        return "keep going"
    }
    else {
        return "answer yes or no"
    }
}
// Write the test for a function that returns "in budget" if a price is lower than $300.

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
