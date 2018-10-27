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

    describe('urlify', () => {

        it('', () => {
            const urlify = require('../challenges/cracking-the-coding-interview/urlify.js')
            expect(urlify('String with spaces.')).to.equal('String%20with%20spaces.')
            expect(urlify(' ')).to.equal('%20')
            expect(urlify(' Foo Bar')).to.equal('%20Foo%20Bar')
            expect(urlify('Bar Foo ')).to.equal('Bar%20Foo%20')
            expect(urlify('Double  Space')).to.equal('Double%20%20Space')
            expect(urlify('   ')).to.equal('%20%20%20')
        })

    })

})