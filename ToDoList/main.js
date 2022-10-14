let item = document.querySelector("#item");
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const reset = document.querySelector('#reset');
let checkboxes;

/* ////   FUNCTIONS  ///////   */

function getAll() { /* Retrieves stored list on page load */
    if (localStorage.length > 0) {
        for (const i in localStorage) {
            if (localStorage.getItem(i) == 'true') {
                localStorage.removeItem(i);
            }
        }
        let toDoArray = Object.keys(localStorage);
        toDoArray.forEach((item) => addItem(item));
    }
}

function addItem(input) { /* Adds new item and checkbox to DOM */
    let newLi = document.createElement("li");
    ul.appendChild(newLi);

    /* create label for checkbox */
    let newLabel = document.createElement("label");
    newLabel.setAttribute("for", input.replaceAll(' ', '_'));
    newLabel.textContent = input;
    newLi.appendChild(newLabel); //child? or insertAdjacent?

    /*  create checkbox */
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checkbox");
    checkbox.setAttribute("name", "checklist");
    checkbox.setAttribute("id", input.replaceAll(' ', '_'));
    checkbox.addEventListener('change', function () {
        changeClass(checkbox.parentNode);
        updateValue(input, (checkbox.checked).toString());//if true or false
    })

    newLabel.insertAdjacentElement('beforeend', checkbox);
    return checkboxes = document.querySelectorAll('.checkbox');
}

function storeItem(input) {  /* adds new item to localStorage*/
    localStorage.setItem(input, 'false');
}

function resetList() {
    localStorage.clear();
    ul.innerHTML = '';
}

function changeClass(e) {
    e.parentNode.classList.toggle('strike-through')
}

function updateValue(input, value) { //there is a bug here
    localStorage.setItem(input, value);
}

/*   ////// RUN PROGRAM  //////////////  */

window.onload = () => {
    getAll();
    /*  if (checkboxes) {
         console.log('getting checkboxes');
         checkboxes.forEach((checkbox) => {
             checkbox.addEventListener('change', function () {
                 changeClass(checkbox);
                 updateValue((checkbox.id).replaceAll('_', ' '), (checkbox.checked).toString());
             })
         });
     } */
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (item.value) {
        addItem(item.value);
        storeItem(item.value);
        item.value = "";
    }
}
);

reset.addEventListener('click', () => {
    resetList();
    return (console.log('local storage cleared.'))
}
);


