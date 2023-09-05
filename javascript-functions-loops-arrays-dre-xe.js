// Functions loops and arrays 9/5/23
// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
//Pseudocode
// input: an array of numbers 
// output: an array of numbers multiplied by 3
// process: use a for loop to access the values of the array and multiply them by 3, iterate through them. And return the numbers multiplied by 3  
    const testArr1 = [3, 9, 15, 4, 10]
    const mult3 = (array) => {
        let storageArray = []
        for (let index = 0; index < array.length; index++) {
            storageArray.push(array[index]*3)
        }
        return storageArray
    }
    console.log(mult3(testArr1))
// // output: [9, 27, 45, 12, 30]
// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
//Pseudocode
//input: array of numbers
// output: array of odd numbers
// process: use a for loop to iterate and access the values of the array, use a modulo operator to only get odd numbers and return the array of odd numbers
    const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
    const oddNumbers = (array) => {
            let storageArray = []
            for (let index = 0; index < array.length; index++) {
                if (array[index] % 2 !== 0) {
                    storageArray.push(array[index])
                }
            }
            return storageArray 
    }
    console.log(oddNumbers(testArr2))
// // output: [-7, 3, 5, 13]
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
//Pseudocode
//input: array of numbers and letters
//output: string 
//process: for loop to iterate and access the values of the array, then use type of to only return the string values 
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
    const ourString = (array) => {
        let storageArray = []
        for (let index = 0; index < array.length; index++) {
            console.log(typeof array[index] === "string")
            if (typeof array[index] === "string") {
            storageArray.push(array[index])
            }
        }
        return storageArray.join("")
    }
    console.log(ourString(comboArr))
// // output: "nicework"
// Create a function that takes in an array of numbers and returns the sum.
//Pseudocode
//input: array of numbers
//output: number of the sum 
//process: use a for loop to iterate to go through all the values and sum them together     
    const addThese1 = [1, 2, 3, 4]
    const numberSum = (array) => {
        for (let index = 0; index < array.length; index++) {
            numberSum += array[index]
        }
    }
    console.log(numberSum(addThese1))
// // output: 10

// const addThese2 = []
// // output: 0
// Create a function that takes in an array of numbers and returns the index of the largest number.
// const indexHighestNumber = [1, 4, 2, 3]
// // output: 1
// 🏔 Stretch Goals
// Create a function that takes in two arrays and returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3, 3]
// const arr2 = [7, 8, 2, 3, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]
// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// const arrayLength = 6
// const arrayValue = 0
// // output: [0, 0, 0, 0, 0, 0]

// const arrayLength = 4
// const arrayValue = 11
// // output: [11, 11, 11, 11]
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// const addUp1 = 4
// // 1 + 2 + 3 + 4 = 10
// // output: 10

// const addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // output: 55

// const addUp3 = 600
// // output: 180300