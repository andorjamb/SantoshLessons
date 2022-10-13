let item = document.querySelector("#item");
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const reset = document.querySelector('#reset');
let checkboxes;

/* ////   FUNCTIONS  ///////   */

function getAll() { /* Retrieves stored list  */
/**now this needs to be fixed! */

    if (localStorage.length > 0) {
        let toDoArray = Object.keys(localStorage);
        console.log(toDoArray);
toDoArray.forEach((item)=>addItem(item));
    }
}

function addItem(input) { /* Adds new item and checkbox to DOM */
        let newLi = document.createElement("li");
        ul.appendChild(newLi);

        /* create label for checkbox */
        let newLabel = document.createElement("label");
        //newLabel.setAttribute("for", input.replaceAll(' ', '_'));
        newLabel.textContent = input;
        newLi.appendChild(newLabel);
       
        /*  create checkbox */
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", "checkbox");
        checkbox.setAttribute("name", "checklist");
        //checkbox.setAttribute("id", input.replaceAll(' ', '_'));
        checkbox.addEventListener('change', function(){
        changeClass(checkbox.parentNode);
        storageStatus(checkbox, checkbox.checked);//if true or false
})

        newLabel.insertAdjacentElement('beforeend', checkbox);  
 return checkboxes = document.querySelectorAll('.checkbox');   
}

function storeItem(input) {  /* adds item to localStorage, updates list length */
/**change this! make the key the input id. then the value can be true or false! */
    //localStorage.setItem(((localStorage.length)+1), input);
    localStorage.setItem(input, true);
}

/**There is a problem here! You need to fix the parameter */
function removeToDo(ob) {
    localStorage.removeItem(ob);
}

function resetList() {
    localStorage.clear();
    ul.innerHTML='';
}

function changeClass(e){
    e.parentNode.classList.toggle('strike-through')
}

function storageStatus(node, bool){
    console.log('store status output:', bool);
    if(bool){
        removeToDo(node);
    }
    else{storeItem(node)}

}

/*   ////// RUN PROGRAM  //////////////  */

window.onload = () => {
    getAll();
    if (checkboxes){
    checkboxes.forEach((node)=>{
        node.addEventListener('change', function(){        
        console.log('event listener working!');
        changeClass(node);
        storageStatus(node, node.checked);//if true or false
    })
    });
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();  
if (item.value){ 
    addItem(item.value);
    storeItem(item.value);
    item.value = "";
}
    }
    ); 

reset.addEventListener('click', ()=>{
    resetList();
    return (console.log('local storage cleared.'))
}
);


