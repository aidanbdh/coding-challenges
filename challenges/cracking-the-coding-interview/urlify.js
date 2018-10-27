'use strict'
/*
Write a method to replace all spaces in a string with '%20'.
*/

module.exports = str =>
    str.split(' ').join('%20')