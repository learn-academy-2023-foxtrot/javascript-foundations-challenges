// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

const testArr1 = [3, 9, 15, 4, 10]
// output: [9, 27, 45, 12, 30]

//pseudocode: 
//input: array of numbers
//output: each value multipied by 3
//Create a function called mult3. It will iterate through each value by 3.

const mult3 = (array) => {
    let storageArray = []
    for(let i = 0; i < array.length; i++) {
        storageArray.push(array[i] * 3)
    }
    return storageArray
}
console.log(mult3(testArr1))


//Write a function that takes in an array of numbers and returns a new array with only odd numbers.

const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// output: [-7, 3, 5, 13]

//pseudocode:
//input: an array of numbers
//output: only odd numbers
//create a function named onlyOdd. This will only return odd numbers.
const onlyOdd = (array) => {
    let oddNumbers = []
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 !== 0) {
            oddNumbers.push(array[i])
        }
    }
    return oddNumbers 
}
console.log(onlyOdd(testArr2))


//Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.

const comboArr = [
    7,
    "n",
    true,
    "i",
    "c",
    10,
    "e",
    -388,
    "w",
    3,
    "o",
    0,
    "r",
    false,
    "k"
  ]
  // output: "nicework"


//pseudocode:
//input: an array of numbers with strings
//output: a string
//Create a function named onlyLetters. Find the letters in the array and convert the array into a string.
const onlyLetters = (array) => {
    let storageArray = []
    for(let i = 0; i < array.length; i++) {
        if(typeof array[i] === "string") {
      return "hello"
        }
        
    }
}
console.log(onlyLetters(comboArr))