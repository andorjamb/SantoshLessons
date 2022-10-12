let item = document.querySelector("#item");
const form = document.querySelector("form");
const ul = document.querySelector("ul");


function addItem() {
    if (item.value) {
        let newLi = document.createElement("li");
        ul.appendChild(newLi);
        newLi.textContent = item.value;

    }

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submitting');
    addItem();
    item.value = "";

});




