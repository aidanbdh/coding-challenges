'use strict'

module.exports = matrix => {
    const zeroMatrix = matrix.map(arr => arr.map(el => el))

    matrix.forEach((subArr, i) => {
        subArr.forEach((num, j) => {
            if(num !== 0)
                return

            for(let row = 0; row < subArr.length; row++)
                zeroMatrix[i][row] = 0

            for (let col = 0; col < matrix.length; col++)
                zeroMatrix[col][j] = 0
        })
    })

    return zeroMatrix
}