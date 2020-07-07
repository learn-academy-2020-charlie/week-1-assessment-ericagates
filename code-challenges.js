// ASSESSMENT 1: Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

// define a function that accepts a number as the argument
const checkTemp = (temp) => {
    // check if number is above 212 degrees 
    if (temp > 212) {
        //if so display the temerature + is above boiling point
        return `${ temp } is above boiling point`
    // if not, check if number is at 212
    } else if (temp == 212) {
        //if so display the temerature + is at boiling point
        return `${ temp } is at boiling point`
    // if not, display the temerature + is below boiling point
    } else {
        return `${ temp } is below boiling point`
    }       
}

//call function
console.log(checkTemp(temp1))
console.log(checkTemp(temp2))
console.log(checkTemp(temp3))




// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]

// define a function that accepts an array
const multFive = (array) => {
    // create a new empty array to store updated information
    let newArray = []
    // loop through the input array 
    for (let i = 0;  i < array.length; i++) {
        // multiply every value in array by 5 and add it to new array
        newArray.push(array[i] * 5)
    }
    // output new array
    return newArray
}

//call function
console.log(multFive(myNumbers1))



// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

// define a function that accepts an array
const multFiveAgain = (array) => {
    // create a higher order function map to loop through the array
    // multiply each value by five
    return array.map(value => value * 5)
}

//call function
console.log(multFiveAgain(myNumbers2))







// --------------------4) Create a function that takes in an array and returns an array with only the values at odd indexes.
// Use the test variables provided below. Expected output: [ "Chai tea", "Mocha", "Double espresso" ]

var coffeeRun = ["Vanilla latte", "Chai tea", "Black coffee", "Mocha", "Americano", "Double espresso"]

//define a function that accepts an array
const oddIndexOnly = (array) => {
    // return an array with only odd indexes using filter and modulo 2
    return array.filter((value, index) => index % 2 !== 0)
}

//call function
console.log(oddIndexOnly(coffeeRun))


// --------------------5) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

// define a new function that accepts a string
const noVowels = (someString) => {
    // change string to array and store in array
    let stringToArray = someString.split("");
    
    // return the original array without vowels using filter, and change new array back into string
    return (stringToArray.filter(value => value.toLowerCase() !== "a" && value.toLowerCase() !== "e"  && value.toLowerCase() !== "i"  && value.toLowerCase() !== "o"  && value.toLowerCase() !== "u")).join("")
    
}

//call function
console.log(noVowels(stringWithVowels1))
console.log(noVowels(stringWithVowels2))




// --------------------6) Expand the logic from #5 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var stringWithVowels3 = true
var stringWithVowels4 = 42
var stringWithVowels5 = "CodingIsGreat"

// define a new function that accepts a anything
const checkForTypeAndVowels = (someMessage) => {
    //check if message is of type String 
    if (typeof someMessage === "string") {
        // and if so change string to array and store in array
        let stringToArray = someMessage.split("");
        
        // return the original array without vowels using filter, and change new array back into string
        return (stringToArray.filter(value => value.toLowerCase() !== "a" && value.toLowerCase() !== "e"  && value.toLowerCase() !== "i"  && value.toLowerCase() !== "o"  && value.toLowerCase() !== "u")).join("")
    } else { //if not, display message
        return `${ someMessage } is not a string`
    }
    
}

//call function
console.log(checkForTypeAndVowels(stringWithVowels3))
console.log(checkForTypeAndVowels(stringWithVowels4))
console.log(checkForTypeAndVowels(stringWithVowels5))
