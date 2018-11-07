'use strict'

module.exports = (head, k) => {
    let tail = head

    while(tail.next)
        tail = tail.next

    for(let i = 0; i < k; i++)
        if(tail && tail.prev)
            tail = tail.prev
        else
            tail = null

    return tail
}