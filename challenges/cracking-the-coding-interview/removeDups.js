'use strict'

module.exports = head => {
    let data = ''

    let node = head

    while(node && node.next) {
        data += '"' + node.data + '"'

        if(data.indexOf('"' + node.next.data + '"') !== -1) {
            const remove = node.next
            node.next = node.next.next
            if(node.next)
                node.next.prev = node
            remove.delete()
        }

        node = node.next
    }
}