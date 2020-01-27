// https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
    let timeArr
    if (s.includes("P")){
      timeArr = s.replace("PM", "").split(":")
      let newTimeArr = parseInt(timeArr[0])+12
      newTimeArr === 24 ? newTimeArr = 0 : null
      newTimeArr = `${newTimeArr}:${timeArr[1]}:${timeArr[2]}`
      return newTimeArr
    } else {
      return timeArr = s.replace("AM", "")
    }
  }