// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(ar) {
    let num = {}
    let biggestNum = ar[0]
    for (let i = 0; i < ar.length; i++){
        if (num[ar[i]]){
            num[ar[i]] += 1
        } else {
            num[ar[i]] = 1
        }
        if (ar[i] > biggestNum) {
            biggestNum = ar[i]
        }
    }
    return num[biggestNum]
}