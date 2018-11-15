'use strict'

module.exports = head => {
    const found = []

    while(found.indexOf(head) === -1) {
        found.push(head)
        head = head.next
    }

    return head
}