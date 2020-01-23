// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
    let totalNums = arr.length
    let negNums = 0
    let posNums = 0
    let zeroNums = 0
    for (let i = 0; i < arr.length; i++){
        arr[i] === 0 ? zeroNums +=1 : arr[i]> 0 ? posNums += 1 : negNums += 1 
    }
    console.log(posNums/totalNums)
    console.log(negNums/totalNums)
    console.log(zeroNums/totalNums)
}