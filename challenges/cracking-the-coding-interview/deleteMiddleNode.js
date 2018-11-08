'use strict'

module.exports = node => {
    if(node.next && node.prev)
        node.delete()
}