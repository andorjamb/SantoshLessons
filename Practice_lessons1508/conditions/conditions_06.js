"use strict";

/**
Write a function named assignGrade that:
takes 1 argument, a number score.
returns a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure it works.

/**
 * @param {string}
 */

function assignGrade(score) {
switch (score){
    case score < 50: return "F";
    break;
    case (score > 50) && (score < 60): return "D";
    break;
    case (score > 60) && (score < 75): return "C";
    break;
    case (score > 75) && (score < 90): return "B";
    break;
    case (score > 90): return "A";
    break;
}

    ß

}

console.log("You got a " + assignGrade(95));
console.log("You got a " + assignGrade(65));
