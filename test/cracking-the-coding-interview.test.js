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

    describe('zeroMatrix', () => {

        it('', () => {
            const zeroMatrix = require('../challenges/cracking-the-coding-interview/zeroMatrix.js')
            expect(zeroMatrix([
                [1, 1, 1],
                [1, 1, 0],
                [0, 1, 1]
            ])).to.deep.equal([
                [0, 1, 0],
                [0, 0, 0],
                [0, 0, 0]
            ])
            expect(zeroMatrix([
                [1, 1, 1],
                [1, 0, 1],
                [1, 1, 1]
            ])).to.deep.equal([
                [1, 0, 1],
                [0, 0, 0],
                [1, 0, 1]
            ])
            expect(zeroMatrix([
                [1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1],
                [1, 1, 1, 1, 0],
                [1, 1, 1, 1, 1]
            ])).to.deep.equal([
                [1, 1, 1, 1, 0],
                [1, 1, 1, 1, 0],
                [0, 0, 0, 0, 0],
                [1, 1, 1, 1, 0]
            ])
        })
    })

    describe('stringRotation', () => {

        it('', () => {
            const stringRotation = require('../challenges/cracking-the-coding-interview/stringRotation.js')
            expect(stringRotation('waterbottle', 'erbottlewat'))
        })

    })

    describe('removeDups', () => {

        it('', () => {
            const Node = require('../helpers/linkedList.js')
            const removeDups = require('../challenges/cracking-the-coding-interview/removeDups.js')

            const head = new Node('a')
            const b = new Node('b')
            const d = new Node('b')
            const c = new Node('c')
            const e = new Node('e')
            const f = new Node('f')
            head.append(b)
            b.append(c)
            c.append(d)
            d.append(e)
            e.append(f)
            f.append(new Node('a'))

            removeDups(head)

            expect(d.data).to.be.null
            expect(f.next).to.be.null
            expect(c.next).to.equal(e)
        })

    })

    describe('kthToLast', () => {

        it('', () => {
            const Node = require('../helpers/linkedList.js')
            const kthToLast = require('../challenges/cracking-the-coding-interview/kthToLast.js')

            const head = new Node('a')
            const b = new Node('b')
            const c = new Node('c')
            const d = new Node('d')
            const e = new Node('e')
            const tail = new Node('f')
            head.append(b)
            b.append(c)
            c.append(d)
            d.append(e)
            e.append(tail)

            expect(kthToLast(head, 1)).to.equal(e)
            expect(kthToLast(head, 0)).to.equal(tail)
            expect(kthToLast(head, 3)).to.equal(c)
            expect(kthToLast(head, 5)).to.equal(head)
            expect(kthToLast(head, 6)).to.be.null
            expect(kthToLast(head, 7)).to.be.null
        })

    })

    describe('deleteMiddleNode', () => {

        it('', () => {
            const Node = require('../helpers/linkedList.js')
            const deleteMiddleNode = require('../challenges/cracking-the-coding-interview/deleteMiddleNode.js')

            const head = new Node('a')
            const b = new Node('b')
            const c = new Node('c')
            const d = new Node('d')
            const e = new Node('e')
            const tail = new Node('f')
            head.append(b)
            b.append(c)
            c.append(d)
            d.append(e)
            e.append(tail)

            deleteMiddleNode(c)
            expect(c.data).to.be.null
            expect(c.prev).to.be.null
            expect(c.next).to.be.null
            deleteMiddleNode(head)
            expect(head.data).to.equal('a')
            expect(head.prev).to.be.null
            expect(head.next).to.equal(b)
            deleteMiddleNode(tail)
            expect(tail.data).to.equal('f')
            expect(tail.prev).to.equal(e)
            expect(tail.next).to.be.null
        })

    })

    describe('sumLists', () => {

        it('', () => {
            const Node = require('../helpers/linkedList.js')
            const sumLists = require('../challenges/cracking-the-coding-interview/sumLists.js')

            const heada = new Node('1')
            const b = new Node('6')
            const c = new Node('7')

            const headd = new Node('3')
            const e = new Node('4')
            const tail = new Node('5')

            heada.append(b)
            b.append(c)

            headd.append(e)
            e.append(tail)

            expect(sumLists(heada, headd)).to.equal(761 + 543)
            expect(sumLists(headd, heada)).to.equal(1304)
        })

    })

    describe('palindrome', () => {

        it('', () => {
            const Node = require('../helpers/linkedList.js')
            const palindrome = require('../challenges/cracking-the-coding-interview/palindrome.js')

            const head = new Node('a')
            const b = new Node('b')
            const c = new Node('c')
            const d = new Node('c')
            const e = new Node('b')
            const tail = new Node('a')
            head.append(b)
            b.append(c)
            c.append(d)
            d.append(e)
            e.append(tail)

            expect(palindrome(head)).to.be.true
            c.delete()
            expect(palindrome(head)).to.be.true
            b.delete()
            expect(palindrome(head)).to.be.false
            e.delete()
            expect(palindrome(head)).to.be.true
        })

    })

})