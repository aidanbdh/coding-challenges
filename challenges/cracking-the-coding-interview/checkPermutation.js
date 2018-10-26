'use strict'

module.exports = (str1, str2) => {
    if(str1.length < str2.length) {
        const str = str1
        str1 = str2
        str2 = str
    }
    
    str2 = str2.split('')

    for(let i = 0; i < str1.length; i++) {
        const index = str2.indexOf(str1[i])
        if(index === -1)
            return false
        str2[index] = null
    }

    return true
}