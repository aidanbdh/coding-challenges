'use strict'

/*
Implement a method to perform basic string compression using the counts of repeated 
characters.
*/

module.exports = str => {
    let compressed = str[0]
    let num = 1

    for(let i = 1; i < str.length; i++)
        if(compressed[compressed.length - 1] !== str[i]) {
            compressed += num + str[i]
            num = 1
        } else
            num++

    compressed += num

    return compressed.length < str.length ? compressed : str
}