let item = document.querySelector("#item");
const form = document.querySelector("form");
const ul = document.querySelector("ul");
let itemNumber = 0;
const checkedNodes = [];
const checkboxNodeList = document.querySelector('.checkbox');
const reset = document.querySelector('#reset');



/* ////   FUNCTIONS  ///////   */


function getAll() { /* Retrieves stored list  */
    if (localStorage.length > 0) {
        console.log(localStorage);
        for (let i = 1; i <= localStorage.length; i++) {
            let fetched = localStorage.getItem(i);
            console.log(fetched);
           addItem(fetched);
        }
    }
}


function addItem(input) { /* Adds new item and checkbox to DOM */
        /*  create checkbox */
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", "checkbox");
        checkbox.setAttribute("id", input.replaceAll(' ', '_'));
        /* create new list item  */
        let newLi = document.createElement("li");
        newLi.textContent = input;
        ul.appendChild(newLi);

        /* create empty label for checkbox */
        let newLabel = document.createElement("label");
        newLabel.setAttribute("for", input.replaceAll(' ', '_'));
        newLi.appendChild(newLabel);
        newLabel.insertAdjacentElement('beforeend', checkbox);
        console.log('print checkboxnode list:', checkboxNodeList);
    
}

function storeItem(input) {  /* adds item to localStorage, updates list length */
    localStorage.setItem(++itemNumber, input);
    return itemNumber;
}

function removeItem(ob) {
    checkboxNodeList.pop(ob);
}


function resetList() { 
    localStorage.clear();
}


/*   ////// RUN PROGRAM  //////////////  */

window.onload = () => getAll();
console.log(localStorage.getItem("0"));
console.log(checkboxNodeList);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submitting');
if (item.value){ addItem(item.value);
    storeItem(item.value);
    item.value = "";}
});

reset.addEventListener('click', ()=>resetList());

for (let node in checkboxNodeList){
    console.log(node);
    console.log('class list', checkbox.classList);
    node.addEventListener('change', function () {
        if (node.checked) {node.classList.add("strike-through");}
        else {
            node.classList.remove("strike-through");}
 

})}



