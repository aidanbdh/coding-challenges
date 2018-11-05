'use strict'

module.exports = (str1, str2) => {
    let length = 0

    while (length < str1.length) {
        // Find first letter
        for(let i = 0; i < str1.length; i++) {
            const index = str2.indexOf(str1[0])
            for(let j = index; j < str2.length; j++) {
                if(str1[i] !== str2[j])
                    return false

                if((j + 1) === str2.length)
                    j = -1
            }
        }
    }

    return true
}