'use strict';

/** We've implemented most of the waitOneSecond function. However, it's always in the pending state. 
 * Fix the implementation so that it moves to the fulfilled state after 1 second.

*/

const waitOneSecond = () => {
  // write here
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });


};

// Sample usage - do not modify
waitOneSecond().then(() => {
  console.log('Done waiting.');
});
