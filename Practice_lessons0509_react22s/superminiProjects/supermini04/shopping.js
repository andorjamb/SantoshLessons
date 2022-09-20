/**
 * @param {array} items
 * @param {string} item
 */ // adds the input to an array
function addItem(arr, str) {
  arr.push(str);
  return arr;
}

/**
 * @param {array} items
 */ //parameter is the shopping list array, returns items in lower case
function exportLowerCasedCSV(arr) {
  //return arr.join(", ").toLowerCase();  //to LowerCase won't work on the array items, need to use map function:
  items.map(function (item){
    return item.toLowerCase();
  }).join(',');


// Sample usage - do not modify
let form = document.querySelector("#shopping-list-form");
let itemName = document.querySelector("#item-name");
let list = document.querySelector("#shopping-list");
const exportedJson = document.querySelector("#exported-json");

let items = [];

function render(items) {
  console.log("Items: " + items.join(", "));
  list.innerHTML = "";
  items.forEach(function (item) {
    list.insertAdjacentHTML(
      "beforeend",
      `<li><div class="card">${item}</div></li>`
    );
  });
  exportedJson.textContent = exportLowerCasedCSV(items);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  items = addItem(items, itemName.value);
  itemName.value = "";
  render(items);
});

render(items);
