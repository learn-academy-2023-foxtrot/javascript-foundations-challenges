// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.

//pseudocode: 
// Name: multTen
//Input: array
// Output: array multiplied by 10.
// process: iteration .map() to multipy all the number by ten


// const arr1 = [3, 9, 15, 4, 10]


// const multTen = (array) => {
//     return array.map((value) => {
//         return value * 10
//     })
// }
// console.log(multTen(arr1))

// Output: [ 30, 90, 150, 40, 100 ]


//Create a function that takes in an array of numbers and returns an array with all numbers divided by two.

//pseudocode: 
// Name: divTwo
//Input: array
// Output: array divided by two.
// process: iteration .map() to divide all the number by two

// const arr1 = [3, 9, 15, 4, 10]

// const divTwo = (array) => {
//     return array.map((value) => {
//         return value / 2
//     })
// }
// console.log(divTwo(arr1))


//Create a function that takes in an array of numbers and returns an array with only odd numbers.

//pseudocode: 
// Name: oddNum
//Input: array
// Output: array with only odd numbers
// process: iteration .filter() to return only odd numbers

// const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]

// const oddNum = (array) => {
//     return array.filter((value) => {
//         return value % 2 !== 0
//     })
// }
// console.log(oddNum(arr2))
// output: [7, 3, 5, 13, -9]

//Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.

//pseudocode: 
// Name: multiWords
//Input: string
// Output: array with only the words that have an odd number of characters.
// process: iteration .filter() .length() .split() to return string with only odd characters 



    // output: ["a", "wonderful", "ain't", "passing", "craze"]
    

//Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.


//pseudocode: 
// Name: numLet
//Input: array
// Output: string with only the letters form the array with number and string values
// process: using iteration, .filter(), .join() typeof to in an array of numbers and letters and returns a string with only the letters.

const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// output: "nicework"

const numLet = (array) => {
    return array.filter((value) => {
        return typeof value === "string"
    })
    return value.join(" ")
}

console.log(numLet(comboArr));