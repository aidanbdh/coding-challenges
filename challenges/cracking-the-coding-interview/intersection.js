'use strict'

/*
Determine if two linked lists intersect
*/

module.exports = (nodea, nodeb) => {
    while(nodea) {
        const head = nodeb
        while(nodeb) {
            if(nodeb === nodea)
                return nodeb
            nodeb = nodeb.next
        }
        nodea = nodea.next
        nodeb = head
    }

    return false
}