'use strict'

/*
There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings write a function to check 
if they are one edit (or zero edits) away.
*/

module.exports = (str1, str2) => {
    let edit = false
    let i = 0
    let j = 0

    while(i < str1.length && j < str2.length)
        if (str1[i] !== str2[j]) {
            if (str1.length > str2.length)
                i++
            else if (str2.length > str1.length)
                j++
            else {
                i++
                j++
            }

            if (!edit)
                edit = true
            else
                return false
        } else {
            i++
            j++
        }

    return true
}