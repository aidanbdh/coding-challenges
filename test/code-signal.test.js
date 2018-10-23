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
            // expect(boxBlur([])).to.deep.equal([])
        })

    })

})