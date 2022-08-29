"use strict";

/**
Complete the function evenOrOdd such that it returns the string "even"
when the number parameter it receives is even and "odd" otherwise.Can you make it work with negative numbers too?

Tests
Implements evenOrOdd() for even numbers
Implements evenOrOdd() for odd numbers
/**
 * @param {string} number
 */
//4


function evenOrOdd() {

    if (Number(prompt("Give a number: ")) % 2 == 0){
return "even";
    }
    else {return "odd";}

}

