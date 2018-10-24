'use strict'

/*
Check if all digits of the given integer are even.
*/

module.exports = (n) => {
    n = n + ''

    for(let i = 0; i < n.length; i++) {
        if (Number.parseInt(n[i]) % 2 !== 0)
          return false
    }

    return true
}