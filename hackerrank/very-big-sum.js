// https://www.hackerrank.com/challenges/a-very-big-sum/problem

function aVeryBigSum(ar) {
    let total = 0
    for (let i = 0; i < ar.length; i++){
        total += ar[i]
    }
    return total
}