// https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
    let total1 = 0
    let total2 = 0
    for (let i = 0; i < arr.length; i++){
        total1 += arr[i][i]
        total2 += arr[i][(arr.length-1)-i]
    }
    return Math.abs(total1-total2)
}