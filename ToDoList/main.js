let item = document.querySelector("#item");
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const reset = document.querySelector('#reset');
let checkboxes;

/* ////   FUNCTIONS  ///////   */

function getAll() { /* Retrieves stored list  */

    if (localStorage.length > 0) {
        for (const i in localStorage){
            if (localStorage.getItem(i) == 'true'){
                localStorage.removeItem(i);
            }
        }
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
        checkbox.setAttribute("id", input.replaceAll(' ', '_'));
        checkbox.addEventListener('change', function(){
        changeClass(checkbox.parentNode);
       updateStatus(checkbox, checkbox.checked);//if true or false
})

        newLabel.insertAdjacentElement('beforeend', checkbox);  
 return checkboxes = document.querySelectorAll('.checkbox');   
}

function storeItem(input) {  /* adds item to localStorage*/
    localStorage.setItem(input, false);
}

/**this function not necessary?*/
/* function removeToDo(item) {
    localStorage.removeItem(item);
} */

function resetList() {
    localStorage.clear();
    ul.innerHTML='';
}

function changeClass(e){
    e.parentNode.classList.toggle('strike-through')
}

function updateStatus(input, value){
    if(value == true){
        localStorage.removeItem(input);
    }
    else{storeItem(input);}
}

/*   ////// RUN PROGRAM  //////////////  */

window.onload = () => {
    getAll();
    if (checkboxes){
    checkboxes.forEach((checkbox)=>{
        checkbox.addEventListener('change', function(){        
        changeClass(checkbox);
      updateStatus(checkbox.id.replaceAll('_', ' '), checkbox.checked);
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


