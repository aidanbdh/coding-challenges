'use strict'

/*
In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.
*/

module.exports = (matrix) => {
    const board = []

    for(let y = 0; y < matrix.length; y++) {
        board.push([])

        for(let x = 0; x < matrix[0].length; x++) {

            board[y].push(calculate([y, x], matrix))
        }
    }

    return board

}

function calculate(point, matrix) {
    const y = point[0]
    const x = point[1]
    let num = 0

    if(matrix[y - 1] && matrix[y - 1][x - 1])
      num++
    if (matrix[y - 1] && matrix[y - 1][x])
        num++
    if (matrix[y - 1] && matrix[y - 1][x + 1])
        num++
    if (matrix[y] && matrix[y][x - 1])
        num++
    if (matrix[y] && matrix[y][x + 1])
        num++
    if (matrix[y + 1] && matrix[y + 1][x - 1])
        num++
    if (matrix[y + 1] && matrix[y + 1][x])
        num++
    if (matrix[y + 1] && matrix[y + 1][x + 1])
        num++

    return num
}