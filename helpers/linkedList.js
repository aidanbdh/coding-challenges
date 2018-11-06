'use strict'

module.exports = node

function node(data) {
    this.data = data
    this.next = null
    this.prev = null

    this.append = node => {
        const next = this.next
        this.next = node
        node.next = next
        node.prev = this
    }

    this.prepend = node => {
        const prev = this.prev
        this.prev = node
        node.prev = prev
        node.next = this
    }

    this.delete = () => {
        this.next.prev = prev
        this.prev.next = next
        this = {}
    }
}