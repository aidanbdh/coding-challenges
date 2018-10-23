/* globals describe it */
'use strict'

const { expect } = require('chai')

describe('Code Signal Challenges:', () => {

    describe('avoidObstacles', () => {

        it('', () => {
            const avoidObstacles = require('../challenges/code-signal/avoidObstacles.js')
            expect(avoidObstacles([5, 3, 6, 7, 9])).to.equal(4)
            expect(avoidObstacles([2, 3])).to.equal(4)
            expect(avoidObstacles([1, 4, 10, 6, 2])).to.equal(7)
            expect(avoidObstacles([1000, 999])).to.equal(6)
            expect(avoidObstacles([19, 32, 11, 23])).to.equal(3)
            expect(avoidObstacles([5, 8, 9, 13, 14])).to.equal(6)
        })

    })

    describe('boxBlur', () => {

        it('', () => {
            const boxBlur = require('../challenges/code-signal/boxBlur.js')
            expect(boxBlur([
                [1, 1, 1],
                [1, 7, 1],
                [1, 1, 1]
            ])).to.deep.equal([[1]])
            expect(boxBlur([
                [7, 4, 0, 1],
                [5, 6, 2, 2],
                [6, 10, 7, 8],
                [1, 4, 2, 0]
            ])).to.deep.equal([
                [5, 4],
                [4, 4]
            ])
            expect(boxBlur([
                [0, 18, 9],
                [27, 9, 0],
                [81, 63, 45]
            ])).to.deep.equal([[28]])
            expect(boxBlur([
                [36, 0, 18, 9],
                [27, 54, 9, 0],
                [81, 63, 72, 45]
            ])).to.deep.equal([
                [40, 30]
            ])
            expect(boxBlur([
                [7, 4, 0, 1],
                [5, 6, 2, 2],
                [6, 10, 7, 8],
                [1, 4, 2, 0]
            ])).to.deep.equal([
                [5, 4],
                [4, 4]
            ])
            expect(boxBlur([
                [36, 0, 18, 9, 9, 45, 27],
                [27, 0, 54, 9, 0, 63, 90],
                [81, 63, 72, 45, 18, 27, 0],
                [0, 0, 9, 81, 27, 18, 45],
                [45, 45, 27, 27, 90, 81, 72],
                [45, 18, 9, 0, 9, 18, 45],
                [27, 81, 36, 63, 63, 72, 81]
            ])).to.deep.equal([
                [39, 30, 26, 25, 31],
                [34, 37, 35, 32, 32],
                [38, 41, 44, 46, 42],
                [22, 24, 31, 39, 45],
                [37, 34, 36, 47, 59]
            ])
        })

    })

    describe('minesweeper', () => {

        it('', () => {
            const minesweeper = require('../challenges/code-signal/minesweeper.js')
            expect(minesweeper([
                [true, false, false],
                [false, true, false],
                [false, false, false]
            ])).to.deep.equal([
                [1, 2, 1],
                [2, 1, 1],
                [1, 1, 1]
            ])
            expect(minesweeper([
                [false, false, false],
                [false, false, false]
            ])).to.deep.equal([
                [0, 0, 0],
                [0, 0, 0]
            ])
            expect(minesweeper([
                [true, false, false, true],
                [false, false, true, false],
                [true, true, false, true]
            ])).to.deep.equal([
                [0, 2, 2, 1],
                [3, 4, 3, 3],
                [1, 2, 3, 1]
            ])
            expect(minesweeper([
                [true, true, true],
                [true, true, true],
                [true, true, true]
            ])).to.deep.equal([
                [3, 5, 3],
                [5, 8, 5],
                [3, 5, 3]
            ])
            expect(minesweeper([
                [false, true, true, false],
                [true, true, false, true],
                [false, false, true, false]
            ])).to.deep.equal([
                [3, 3, 3, 2],
                [2, 4, 5, 2],
                [2, 3, 2, 2]
            ])
            expect(minesweeper([
                [true, false],
                [true, false],
                [false, true],
                [false, false],
                [false, false]
            ])).to.deep.equal([
                [1, 2],
                [2, 3],
                [2, 1],
                [1, 1],
                [0, 0]
            ])

        })

    })

    describe('arrayReplace', () => {

        it('', () => {
            const arrayReplace = require('../challenges/code-signal/arrayReplace.js')
            expect(arrayReplace([1, 2, 1], 1, 3)).to.deep.equal([3, 2, 3])
            expect(arrayReplace([1, 2, 3, 4, 5], 3, 0)).to.deep.equal([1, 2, 0, 4, 5])
            expect(arrayReplace([1, 1, 1], 1, 10)).to.deep.equal([10, 10, 10])
            expect(arrayReplace([1, 2, 1, 2, 1], 2, 1)).to.deep.equal([1, 1, 1, 1, 1])
            expect(arrayReplace([1, 2, 1, 2, 1], 2, 2)).to.deep.equal([1, 2, 1, 2, 1])
            expect(arrayReplace([3, 1], 3, 9)).to.deep.equal([9, 1])
        })

    })

})