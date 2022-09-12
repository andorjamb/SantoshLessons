// TODO: when the user clicks on '#menu-sidebar' => toggle the class 'show' on '#app-sidebar'
const sidebarBtn = document.querySelector("button");
const sidebar = document.querySelector("#app-sidebar");

sidebarBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show");
});

function changeClass() {}
