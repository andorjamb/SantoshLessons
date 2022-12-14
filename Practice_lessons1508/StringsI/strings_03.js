'use strict';
/**
Complete the function lowerName such that it returns
the name parameter it receives all in lower case.

Tests: returns a string
makes string lowercase

 * @param {string} name
 */
function lowerName(name) {
    return name.toLowerCase();

}

const rabbit = "OSMO";
console.log(lowerName(rabbit));

// Sample usage - do not modify
console.log(lowerName("Sam")); // "sam"
console.log(lowerName("ALEX")); // "alex"
