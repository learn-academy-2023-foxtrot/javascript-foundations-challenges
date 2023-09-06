// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Create the function that will make the test pass.

// describe("coffee", () => {
//     it ("returns different statement based on yes or no answer", () => {
//         expect (coffee("yes")).toEqual("drink coffee")
//         expect (coffee("no")).toEqual("keep working")
//         expect (coffee("string")).toEqual("answer yes or no")
//     })
// })

// function name: coffee
// input: string, either "yes" or "no"
// output: string, "drink coffee" or "keep working"
// process: conditional statement that returns a specific string depending on if the user enters yes or no

// const coffee = (string) => {
//     if (string === "yes") {
//         return "drink coffee"
//     } else if (string === "no") {
//         return "keep working"
//     } else {
//         return "answer yes or no"
//     }
// }


// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Create the function that will make the test pass.

describe("stressTest", () => {
    it ("returns different statement based on yes or no answer", () => {
        expect (stressTest("yes")).toEqual("relax")
        expect (stressTest("no")).toEqual("keep going")
        expect (stressTest("string")).toEqual("answer yes or no")
    })
})

// function name: stressTest
// input: string, either "yes" or "no"
// output: string, "relax" or "keep going"
// process: conditional statement that returns a specific string depending on if the user enters yes or no

const stressTest = (string) => {
    if (string === "yes") {
        return "relax"
    } else if (string === "no") {
        return "keep going"
    } else {
        return "answer yes or no"
    }
}