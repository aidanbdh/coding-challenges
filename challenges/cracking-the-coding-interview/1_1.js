'use strict'

// Implement an algorithm to determine if a string has all unique characters.

module.exports = str => 
    !str.split('').filter((char, i) => str.indexOf(char) !== i)[0]