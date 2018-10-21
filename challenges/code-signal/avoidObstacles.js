'use strict'
/* You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles. */

module.exports = (inputArray) => {

    let jump = 2
    let found = false

    while(!found) {
        found = true
        for(let i = 0; i < inputArray.length; i++){
            if(inputArray[i] % jump === 0) {
                jump++
                i = inputArray.length
                found = false
            }
        }
    }

    return jump
}