'use strict';

/**
Complete the renderShoppingList function such that it renders an <li> element
for every item in the items array it receives.
Also, the order of the items should be the same as the one in the array.
So, the first item should show up first (at the top).


/**
 * @param {string[]} items
 */
const renderShoppingList = items => {
    const list = document.getElementById("shopping-list");
    for (const item of items) {
        let newItem = document.createElement('li');
        newItem.textContent = item;
        list.append(newItem);

    }

}
// Sample usage - do not modify
const sampleList = ["Orange", "Banana", "Coffee", "Paper"];
console.log(renderShoppingList(sampleList));


/* An alternative way:





use 
insertAdjacentHTML('beforeend', `<li>{$item}</li>`)*/ 