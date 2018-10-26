'use strict'

/*
Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

Check if the given string is a correct variable name.
*/

module.exports = name => {
    const alphabeta = RegExp('[a-zA-Z]')
    const valid = RegExp('[A-Za-z0-9\_]+')
    // First character is not a letter
    if(name[0] !== '_' && !alphabeta.test(name[0]))
        return false
    // Check every other character
    for(let i = 1; i < name.length; i++)
        if(!valid.test(name[i]))
            return false
    
    return true
}