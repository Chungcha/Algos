// https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {
    let scoreA = 0
    let scoreB = 0
    for (let i = 0; i < a.length; i++){
        if (a[i] > b[i]){
            scoreA += 1
        } else if (a[i] < b[i]){
            scoreB += 1
        } 
    }
    return [scoreA, scoreB]
}