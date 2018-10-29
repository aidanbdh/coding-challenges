'use strict'

/*
Given a string, write a function to check if it is a permutation of a palendrome.
*/

module.exports = str => {
    let mid = false

    str = str.toLowerCase().split(' ').join('').split('')

    for(let i = 0; i < str.length; i++) {

        while(!str[i] && i < str.length)
            i++

        if(i >= str.length)
            break

        const char = str[i]
        let index = str.lastIndexOf(char)

        if(index === i) 
            index = str.indexOf(char)

        console.log(str)

        if(index === i)
            if(mid)
                return false
            else
                mid = true

        str[i] = null
        str[index] = null
    }

    return true
}