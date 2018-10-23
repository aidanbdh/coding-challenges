'use strict'

/* 
Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.
*/

module.exports = (inputArray, elemToReplace, substitutionElem) =>
    inputArray.map((el) => el === elemToReplace ? substitutionElem : el)