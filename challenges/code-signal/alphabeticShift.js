'use strict'

/*
Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).
*/

module.exports = str => 
    str.split('').map((char, index) => {
        char = str.charCodeAt(index)

        if (char === 122) 
            char = 97
        else if (char === 90) 
            char = 65
        else 
            char++
            
        return String.fromCharCode(char)
    }).join('')