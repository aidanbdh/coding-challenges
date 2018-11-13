'use strict'

module.exports = (nodea, nodeb) => {
    let node = nodea
    let a = 0
    let b = 0

    while(node.next)
        node = node.next

    while(node) {
        a += node.data
        node = node.prev
    }

    node = nodeb

    while (node.next)
        node = node.next

    while(node) {
        b += node.data
        node = node.prev
    }
    
    return Number.parseInt(a) + Number.parseInt(b)

}