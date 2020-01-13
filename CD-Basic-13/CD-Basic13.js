// Print 1-255
// Print all integers from 1 to 255.

for (let i = 0; i<256; i++){
    console.log(i)
}

// Print Ints and Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far.
let total = 0
for (let i = 0; i<256; i++){
    total+= i
    console.log(i,total)
}

// Find and Print Max
// Given an array, find and print its largest element

let array = [1,5,2,6,10,3,50,4]
let max = array[0]
for (let i=1; i<array.length; i++){
    if (max < array[i]){
        max = array[i]
    } else {
        null
    }
}
console.log(max)
//because of scoping, the variable max keeps getting reassigned but once the loop is done the reassigned value is returned outside of the loop.

// Array with Odds
// Create an array with all the odd integers between 1 and 255 (inclusive)

let array = []
for (let i=1;i<256;i++){
    if( i%2==0){
        null
    } else {
        array.push(i)
    }
}
console.log(array)

// Greater than Y
// Given an array and a value Y, count and print the number of array values greater than Y

let array = [1,5,2,6,10,3,50,4]
function greaterThanY(array, value){
    let numOfGreaterThan = 0
    for (let i=0;i<array.length;i++){
        if (value < array[i]){
            numOfGreaterThan +=1
        }
    }
    console.log(numOfGreaterThan)
}
greaterThanY(array, -1)

// Max, Min, Average
// Given an array, print the max, min and average values for that array.




// Swap String For Array Negative Values
// Given an array of numbers, replace any negative value with the string 'Dojo'


// Print Odds 1-255
// Print all odd integers from 1 to 255

// Iterate and Print Array
// Iterate through a given array, printing each value.

// Get and Print Average
// Analyze an array's values and print the average.

// Square the Values
// Square each value in a given array, returning that same array with changed values.

// Zero Out Negative Numbers
// Return the given aray, after setting anay negative values to zero

//Shift Array Values
//Given an array, move all values forawrd by one index, dropping the first and leaving a '0' value at the end