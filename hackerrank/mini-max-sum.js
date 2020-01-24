// https://www.hackerrank.com/challenges/mini-max-sum/problem?h_r=next-challenge&h_v=zen

function miniMaxSum(arr) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let totalSum = arr.reduce(reducer)
    let minSum = totalSum - arr[0]
    let maxSum = totalSum - arr[0]
    for (let i = 0; i < arr.length; i++){
        if (minSum > totalSum - arr[i]){
            minSum = totalSum - arr[i]
        } else if (maxSum < totalSum - arr[i]){
            maxSum = totalSum - arr[i]
        }
    }
    console.log(minSum, maxSum)
}