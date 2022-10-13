let item = document.querySelector("#item");
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const reset = document.querySelector('#reset');
let checkboxes;

/* ////   FUNCTIONS  ///////   */

function getAll() { /* Retrieves stored list  */
    if (localStorage.length > 0) {
        for (let i = 1; i <= localStorage.length; i++) {
            let fetched = localStorage.getItem(i);
           addItem(fetched);   
        }
    }
}

function addItem(input) { /* Adds new item and checkbox to DOM */
        let newLi = document.createElement("li");
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
        checkbox.addEventListener('change', function(){
        changeClass(checkbox.parentNode);
        storageStatus(checkbox.checked);//if true or false
})

        newLabel.insertAdjacentElement('beforeend', checkbox);  
 return checkboxes = document.querySelectorAll('.checkbox');   
}

function storeItem(input) {  /* adds item to localStorage, updates list length */
/**change this! make the key the input id. then the value can be true or false! */
    localStorage.setItem(((localStorage.length)+1), input);
}

/**There is a problem here! You need to fix the parameter */
function removeItem(ob.value()) {
    localStorage.removeItem(ob);
}

function resetList() {
    localStorage.clear();
    ul.innerHTML='';
}

function changeClass(e){
    e.parentNode.classList.toggle('strike-through')
}

function storageStatus(bool){
    console.log('store status output:', bool);
    if(bool){
        removeItem();
    }
    else{storeItem()}

}

/*   ////// RUN PROGRAM  //////////////  */

window.onload = () => {
    getAll();
    if (checkboxes){
    checkboxes.forEach((node)=>{
        node.addEventListener('change', function(){        
        console.log('event listener working!');
        changeClass(node);
        storageStatus(node.checked);//if true or false
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


