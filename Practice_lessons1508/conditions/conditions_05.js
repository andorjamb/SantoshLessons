"use strict";

/**
Write a function named greaterNum that:
takes 2 arguments, both numbers.
returns whichever number is the greater (higher) number.
Call that function 2 times with different number pairs, and log the output to make sure it works
(e.g. "The greater number of 5 and 10 is 10.").


/**
 * @param {numbers} 
 */

function greaterNum(num1, num2) {}

console.log(greaterNum(5, 10));



//5
/*- Write a function named greaterNum that: takes 2 arguments, both numbers. returns whichever number is the greater (higher) number. Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.”).*/


//function greaterNumCall(){
    function greaterNum() {
        let num1 = Number(prompt("Give the first number: "));
        let num2 = Number(prompt("Give the sescond number: "));
        if (num1 > num2){return num1;}
        else if (num1 == num2) {
            return(console.log("The numbers were equal."));
        }
        else {return num2}
        console.log(`The greater number of ${num1} and ${num2} is ${greaterNum(num1, num2)} .`);}
        //greaterNum(x,y);
        //greaterNum(w,z);
        //}
        
