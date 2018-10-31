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

    describe('palendromePermutation', () => {

        it('', () => {
            const palendromePermutation = require('../challenges/cracking-the-coding-interview/palendromePermutation.js')
            expect(palendromePermutation('acto cat')).to.be.true
            expect(palendromePermutation('aco Tact')).to.be.true
            expect(palendromePermutation('TACOTAC')).to.be.true
            expect(palendromePermutation('octos cat')).to.be.false
            expect(palendromePermutation('tacotaco')).to.be.true
            expect(palendromePermutation('palendrome')).to.be.false
        })

    })
    
    describe('oneAway', () => {

        it('', () => {
            const oneAway = require('../challenges/cracking-the-coding-interview/oneAway.js')
            expect(oneAway('pale', 'ple')).to.be.true
            expect(oneAway('pales', 'pale')).to.be.true
            expect(oneAway('pale', 'bale')).to.be.true
            expect(oneAway('pale', 'bake')).to.be.false
            expect(oneAway('pale', 'pale')).to.be.true
        })

    })

    describe('stringCompression', () => {

        it('', () => {
            const stringCompression = require('../challenges/cracking-the-coding-interview/stringCompression.js')
            expect(stringCompression('aaa')).to.equal('a3')
            expect(stringCompression('aaabbbc')).to.equal('a3b3c1')
            expect(stringCompression('aaaabaa')).to.equal('a4b1a2')
            expect(stringCompression('abc')).to.equal('abc')
            expect(stringCompression('aabbcc')).to.equal('aabbcc')
        })

    })

})