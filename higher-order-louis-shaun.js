
// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.

// const arr1 = [3, 9, 15, 4, 10]
// output: [30, 90, 150, 40, 100]

// pseudo code
// name : multi10 
// input : array of numbers 
// output : array of numbers multiplied by 10
// process : create a function that iterates each value and multiplies it by 10

// const multi10 = (array) => {
//     let newNum = []
//     for (let i = 0; i < array.length; i++) {
//         newNum.push(arr1[i] * 10)
//       }
//       return newNum
//     }
//     console.log(multi10(arr1))

    // Create a function that takes in an array of numbers and returns an array with all numbers divided by two.

    // pseudo code 
    // name : div 2
    // input : array of numbers 
    // output : array of numbers divided by 2
    // process : create a function that iterates each value and divides it by 2

    const arr1 = [3, 9, 15, 4, 10]
// output: [1.5, 4.5, 7.5, 2, 5]

const div2 = (array) => {
    let newNum = []
    for (let i = 0; i < array.length; i++) {
        newNum.push(arr1[i] / 2)
      }
      return newNum
    }
    console.log(div2(arr1))

// Create a function that takes in an array of numbers and returns an array with only odd numbers.

    const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]
// output: [7, 3, 5, 13, -9]

// pseudo code 
// name : onlyOdd
// input : array of numbers 
// output : array of numbers only odd
// process : create a function that first iterates each value then, then checks if the number is odd 

const onlyOdd = (array) => {
    return array.filter((value) => value % 2 !==0) 
}
console.log(onlyOdd(arr2))

// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.

const pumbaa =
  "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
// output: ["a", "wonderful", "ain't", "passing", "craze"] 

// pseudo code 
// name : 
// input : string of multipule words 
// output : an array of words with an odd number of characters 
// process : create a function that 

const tamon = (array) => {
    
}