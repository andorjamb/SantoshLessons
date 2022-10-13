let item = document.querySelector("#item");
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const reset = document.querySelector('#reset');
const testArray = [];
let checkboxes;





/* ////   FUNCTIONS  ///////   */


function getAll() { /* Retrieves stored list  */
    if (localStorage.length > 0) {
        console.log(localStorage);
        for (let i = 1; i <= localStorage.length; i++) {
            let fetched = localStorage.getItem(i);
           addItem(fetched);
        }
    }
}

function addItem(input) { /* Adds new item and checkbox to DOM */
 /* create new list item, place holder for label and checkbox  */
        let newLi = document.createElement("li");
        //newLi.textContent = input;
        ul.appendChild(newLi);

        /* create label for checkbox */
        let newLabel = document.createElement("label");
        newLabel.setAttribute("for", input.replaceAll(' ', '_'));
        newLabel.textContent = input;
        newLi.appendChild(newLabel);
       
        /*  create checkbox */
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", "checkbox");
        checkbox.setAttribute("name", "checklist");
        checkbox.setAttribute("id", input.replaceAll(' ', '_'));
   
        testArray.push(checkbox);
        newLabel.insertAdjacentElement('beforeend', checkbox);  
          
       //checkboxes.addEventListener('change', checkFunction());
 return checkboxes = document.querySelectorAll('.checkbox');
    
}

function storeItem(input) {  /* adds item to localStorage, updates list length */
    localStorage.setItem(((localStorage.length)+1), input);
   
}

function removeItem(ob) {
    testArray.pop(ob);
    localStorage.remove(ob);
}


function resetList() {
    localStorage.clear();
}

function checkFunction(){
let helpMe = document.querySelectorAll('.checkbox');     
console.log("helpMe");
}


/*   ////// RUN PROGRAM  //////////////  */

window.onload = () => getAll();

form.addEventListener('submit', (e) => {
    e.preventDefault();  
if (item.value){ addItem(item.value);
    /* let checkboxes = document.querySelectorAll('.checkbox');
    console.log('testArray: ', testArray)
    console.log(checkboxes); */
    storeItem(item.value);
    item.value = "";
    console.log('checkboxes: ', checkboxes);
    checkboxes.forEach((node)=>{
    node.addEventListener('change', function(){console.log(node)})});
}
});


reset.addEventListener('click', ()=>{resetList();
    return (console.log('local storage cleared.'))});


