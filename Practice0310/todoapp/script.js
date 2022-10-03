// write to-do app

//get DOM elements, store in JS variables

const form = document.querySelector('form');
const input = document.querySelector('#item');
const clearBtn = document.querySelector('#clear');
const ul = document.querySelector('ul');
const data = JSON.parse(localStorage.getItem('items'));


let itemsArray = [];
if (localStorage.getItem('items')) { itemsArray = JSON.parse(localStorage.getItem('items')) }
else itemsArray = [];



const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}

//santosh's Code:


form.addEventListener('submit', function (e) {
    e.preventDefault();
    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(input.value);
    input.value = '';
})
data.forEach((item) => { liMaker(item); })


clearBtn.addEventListener('click', function () {
    console.log('clicked');
    localStorage.clear();
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    itemsArray = [];

});

