//Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
const testArr1 = [3, 9, 15, 4, 10]
// output: [9, 27, 45, 12, 30]

//Pseudocode:
//Input: Array of Numbers
//Output: Arrays multiplied by number 3
//Process: Iteration 

const mult3 = (array) => {
    let arrayOne = []
    for (let index = 0; index < array.length; index++) {
        arrayOne.push(array[index] * 3)
    }
    return arrayOne
}
console.log(mult3(testArr1))

//Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// output: [-7, 3, 5, 13]

//PseudoCode
//Input: Array of numbers
//Output: Array of only odd numbers
//Process: Iteration and conditionals 

const oddArray = (array) => {
    let arrayTwo = []
    for (let index = 0; index < array.length; index++) {
        if(array[index] % 2 !== 0){
            arrayTwo.push(array[index])
        }
    }
    return arrayTwo
}
console.log(oddArray(testArr2))


//Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
const comboArr = [ 7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"
]
// output: "nicework"

//Pseudocode
//Input: Array of numbers and strings
//Output: String with only letters
//Process: Iteration and conditional using typeOf

const stringOne = (array) => {
    let letters = []
    for (let index = 0; index < array.length; index++) {
        if(typeof array[index] === "string"){
            letters.push(array[index])
        }
    }
    return letters.join("")
}
console.log(stringOne(comboArr))

// Create a function that takes in an array of numbers and returns the sum.
const addThese1 = [1, 2, 3, 4]
// output: 10
const addThese2 = []
// output: 0

//Pseudocode
// Input: array of numbers
// Output: the sum of the numbers in the array
// Process: Iteration 

const sum = (array) => {
    let sumNumbers = []
    for (let i = 0; i < array.length; i++) {
        sumNumbers.push(array[i])    
    }
    return sumNumbers
} 
console.log(sum(addThese1))



// Create a function that takes in an array of numbers and returns the index of the largest number.
const indexHighestNumber = [1, 4, 2, 3]
// output: 1