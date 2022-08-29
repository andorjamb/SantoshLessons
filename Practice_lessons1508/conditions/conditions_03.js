"use strict";

/**
 * @param {number} age
 */

// Sample usage - do not modify
console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(17)); // false



//3
/*- Implement the function canVote such that it returns true whenever the age 18 or above and false in all other scenarios. You should not use an if condition(or ternary).*/
function canVote2() {
    let value = true;
    let age = Number(prompt("How old are you?"));
    while (age < 18){return value = false}
    
 }


 //solution: return age>= 18;
 // will return a boolean based on evaluation of this condition
