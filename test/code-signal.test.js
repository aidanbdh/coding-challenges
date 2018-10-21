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

})