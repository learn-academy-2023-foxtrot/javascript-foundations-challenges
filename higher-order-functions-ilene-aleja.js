// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
// // output: [30, 90, 150, 40, 100]
const arr1 = [3, 9, 15, 4, 10]
    // Pseudocode:
    // Input: an array of numbers
    // Output: array of numbers multiplied by 10
    // Process: higher order function .map()
const mult10 = (array) => {
    return array.map(value => {
        return value * 10
    })
}
console.log(mult10(arr1));

// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
const array1 = [3, 9, 15, 4, 10]
// // output: [1.5, 4.5, 7.5, 2, 5]
    // Pseudocode:
    // Input: an array of numbers
    // Output: array of numbers divided by 2
    // Process: higher order function .map()
const div2 = (array) => {
    return array.map(value => {
        return value / 2
    })
}
console.log(div2(array1))

// Create a function that takes in an array of numbers and returns an array with only odd numbers.
const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]
// // output: [7, 3, 5, 13, -9]
    // Pseudocode:
    // Input: an array of numbers
    // Output: array with odd numbers
    // Process: higher order function .filter()
const oddNumbers = (array) => {
    return array.filter(value => {
        return value % 2 !== 0
    })
}
console.log(oddNumbers(arr2))

// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.
const pumbaa = "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
// // output: ["a", "wonderful", "ain't", "passing", "craze"]
    // Pseudocode:
    // Input: a string 
    // Output: array with words that have odd number of charaters
    // Process: higher order function .filter()
const oddCharacters = (string) => {
    let stringToArray = string.split(" ")
    return stringToArray.filter(value => {
        return value.length % 2 !== 0
    })
}
console.log(oddCharacters(pumbaa));

//Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// output: "nicework"

//Pseudocode
//Input: Array of numbers and letters
//Output: A string with only letters
//Process: .join() and typeof and .filter

const stringOne = (array) => {
    return array.filter(value => {
        return typeof value === "string"
    })
}
console.log(stringOne(comboArr).join(""))

//Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// output: [58, "abcd", true]

//Pseudocode
//Input: Array
//Output: An array without any false, null, 0, or blank values
//Process: typeof 

const filtered = (array) => {
    return array.filter(value => {
        return value 
    })
}
console.log(filtered(filterArrayValues))

//Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.
const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]
// output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]

//Pseudocode
//Input: Array of strings
//Output: Array of string with every other letter capitalized
//Process: Higher order function .map() 

const wackyLetters = (array) => {
    
}

//Create a function that takes in a string and returns a new string with all the vowels removed.
const str = "javascript is awesome"
// output: "jvscrpt s wsm"