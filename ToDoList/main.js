let item = document.querySelector("#item");
const form = document.querySelector("form");
const ul = document.querySelector("ul");
let itemNumber = 0;
const checkboxNodeList = [];



/* ////   FUNCTIONS  ///////   */


function getAll() { /* Retreives stored list  */
    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            let fetched = localStorage.getItem(i);
            console.log(fetched);
        }
    }
}

function addItem(ob) { /* Adds new item to DOM and local storage */
    if (ob.value) {
        /*  create checkbox */
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", "checkbox");
        checkbox.setAttribute("id", ob.value.replaceAll(' ', '_'));
        /* create new list item  */
        let newLi = document.createElement("li");
        newLi.textContent = ob.value;
        ul.appendChild(newLi);

        let newLabel = document.createElement("label");
        newLabel.setAttribute("for", ob.value.replaceAll(' ', '_'));
        newLi.appendChild(newLabel);
        newLabel.insertAdjacentElement('beforeend', checkbox);
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

checkboxNodeList.addEventListener('change', function () {

})







