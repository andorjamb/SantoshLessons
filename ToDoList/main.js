let item = document.querySelector("#item");
const form = document.querySelector("form");
const ul = document.querySelector("ul");
let itemNumber = 0;
const checkboxNodeList = [];
/* const removeItem = document.querySelectorAll(); */


/* ////   FUNCTIONS  ///////   */


function getAll() { /* Retreives stored list  */
    if (localStorage.length > 0) {
        for (let i=0; i<localStorage.length;i++) {
            localStorage.getItem(i);
        }
    }
}

function addItem(ob) { /* Adds new item to DOM and local storage */
    if (ob.value) {
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", "checkbox");
        checkbox.setAttribute("id", ob.value);
        let newLi = document.createElement("li");
        let newLabel = document.createElement("label");
        newLabel.setAttribute("for", ob.value);
        ul.appendChild(newLi);
        newLi.appendChild(newLabel);
        newLi.textContent = ob.value;
        newLabel.insertAdjacentElement('beforebegin', checkbox);
        checkboxNodeList.push(checkbox);
        console.log('print checkbox list:', checkboxNodeList);
        storeItem(ob);

    }
}

function storeItem(ob) {
    localStorage.setItem(++itemNumber, ob.value);
    return itemNumber;
}

function removeItem(ob) {
    checkboxNodeList.pop(ob);
}



function resetList() { }


/*   ////// RUN PROGRAM  //////////////  */

window.onload = function () { getAll() };
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submitting');
    addItem(item);
    item.value = "";
});






