// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]
// output: [30, 90, 150, 40, 100]

// funtion name: mult10
// input: array of numbers
// output: array of new values (numbers multiplied by 10)
// process: built in function .map

// const mult10 = arr1.map((value) => value * 10)
// console.log(mult10)

// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
// const arr1 = [3, 9, 15, 4, 10]
// output: [1.5, 4.5, 7.5, 2, 5]

// function name: div2
// input: array of numbers
// output: array of new values (divided by 2)
// process: built in function .map

// const div2 = arr1.map((value) => value / 2)
// console.log(div2)

// Create a function that takes in an array of numbers and returns an array with only odd numbers.

// const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]
// output: [7, 3, 5, 13, -9]

// function name: oddNum
// input: array of numbers
// output: new array containing only the odd numbers
// process: .filter

// const oddNum = (array) => {
//     return array.filter((value) => value % 2 !== 0)
//   }
//   console.log(oddNum(arr2))

// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.

// const pumbaa =
//   "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
// output: ["a", "wonderful", "ain't", "passing", "craze"]

// function name: oddChar
// input: string of multiple words
// output: array of strings with odd number of characters
// process: .length, .filter

// const arr1 = pumbaa.split(' ')
// const oddChar = (array) => {
//     return array.filter((value) => {
//         return value.length % 2 !== 0
//     })
// }
// console.log(oddChar(arr1))

// Create a function that takes in an array of numbers and letters and returns a string with only the letters.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// output: "nicework"

// function name: arr2
// input: array with numbers and letters
// output: new string with only letters
// process: typeOf function to determine which objects in array are strings, .filter to extract strings from array, .join to join together individual strings from new array to make a new string

const arr2 = (array) => {
    return array.filter((value) => {
        return typeof value === "string"
    }).join("")
}
console.log(arr2(comboArr))


