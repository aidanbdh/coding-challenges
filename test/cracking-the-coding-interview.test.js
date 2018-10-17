'use strict'

const { expect } = require('chai')

describe('"Cracking the coding interview" interview questions', () => {

    describe('question 1.1', () => {

        it('checks if a string has unique characters.', () => {
            const unique = require('../challenges/cracking-the-coding-interview/1_1.js')

            expect(unique('unique')).to.be.false
            expect(unique('same')).to.be.true
            expect(unique('aa')).to.be.false
            expect(unique('a')).to.be.true
            expect(unique('')).to.be.true
        })

    })

})