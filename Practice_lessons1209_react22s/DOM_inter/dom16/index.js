const getUserName = () => {
<<<<<<< HEAD

}

// Sample usage - do not modify
document.querySelector("#name-form").addEventListener("submit", event => {
    event.preventDefault();
    console.log(getUserName());
=======
  return document.querySelector("#user-name").value;
};

// Sample usage - do not modify
document.querySelector("#name-form").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(getUserName());
>>>>>>> 462362d81eb488940cec8db75c81d19a01a09c49
});
