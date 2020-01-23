https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
    let space = " "
    let hash = "#"
    for (let i = 1; i <= n; i++){
        console.log(space.repeat(n-i)+hash.repeat(i))
    }
}

// even more clean 

function staircase(n) {
    for (let i = 1; i <= n; i++){
        console.log("#".repeat(i).padStart(n))
    }

    // so "#" repeats the string i amount of times. padStart appends a string of a certain length (n) in front of the current string.  If it already is the length, nothing is added. First input is the target length and second can be the ouput string

}