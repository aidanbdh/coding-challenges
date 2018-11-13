'use strict'

module.exports = node => {
    let length = 1
    let head = node
    
    while(node.next) {
        node = node.next
        length++
    }

    let tail = node

    for (let i = 0; i < length; i++) {
        if(head.data !== tail.data)
            return false
        
        head = head.next
        tail = tail.prev
    }

    return true
}