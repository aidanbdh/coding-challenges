'use strict'

const { expect } = require('chai')

describe('cracking-the-coding-interview', () => {

    describe('checkPermutation', () => {

        it('', () => {
            const checkPermutation = require('../challenges/cracking-the-coding-interview/checkPermutation.js')
            expect(checkPermutation('abc', 'bca')).to.be.true
            expect(checkPermutation('abc', 'bcd')).to.be.false
            expect(checkPermutation('abc', 'aabc')).to.be.false
            expect(checkPermutation('aac', 'aca')).to.be.true
            expect(checkPermutation('abcdefghijklmnopqrstuvwxyz', 'zyxwvutsrqponmlkjihgfedcba')).to.be.true
            expect(checkPermutation('abcdefghijklmnopqrstuvwxyz', 'zyxwvutsrqponmlkjihgfedcbz')).to.be.false
        })

    })

})