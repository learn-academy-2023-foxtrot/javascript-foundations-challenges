// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
// // output: [9, 27, 45, 12, 30]
// Psuedo: takes in an array of numbers 
// Process: a function named mult3 that takes in an array
// Input: An array of numbers
// Output: A new array multiplied by 3

const testArr1 = [3, 9, 15, 4, 10]
const mult3 = (arr) => {
    let newArray= []
    for (let i = 0; i < arr.length; i++){
        newArray.push(arr[i] * 3)
    }
    return newArray;
}
console.log(mult3(testArr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// // output: [-7, 3, 5, 13]
// Psuedo: a function named evenNums that takes an array
// Input: an array of numbers
// Output: a new array of even numbers
// Process: iterate through an array using a modulo

const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
const evenNums = (arr) =>{
    let evenArr= []
    for (let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evenArr.push(arr[i])
        }
    }
return evenArr;
} 
console.log(evenNums(testArr2))
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
// const comboArr = [
//   7,
//   "n",
//   true,
//   "i",
//   "c",
//   10,
//   "e",
//   -388,
//   "w",
//   3,
//   "o",
//   0,
//   "r",
//   false,
//   "k"
// ]
// // output: "nicework"
// Create a function that takes in an array of numbers and returns the sum.
// const addThese1 = [1, 2, 3, 4]
// // output: 10

// const addThese2 = []
// // output: 0
// Create a function that takes in an array of numbers and returns the index of the largest number.
// const indexHighestNumber = [1, 4, 2, 3]
// // output: 1
