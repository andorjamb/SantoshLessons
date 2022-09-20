class Passport {
  /**
   * @param {string} firstName
   * @param {string} lastName
   */
<<<<<<< HEAD

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    console.log(this.firstName);
  }
  getFirstName() {
    return this.firstName.toLowerCase();
  }

  getLastName() {
    return this.lastName.toUpperCase();

  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;

  }

  getInitials() {
    return this.firstName[0].toUpperCase() + '.' + this.lastName[0].toUpperCase() + '.';
  }


  getIsValidName() {

    if ((this.firstName.length > 1) && (this.lastName.length > 1) && (this.lastName[this.lastName.length - 1] != '.')) {
      return 'yes';

    } else { return 'no'; }

  }
}


=======
}

>>>>>>> 462362d81eb488940cec8db75c81d19a01a09c49
//Sample usage do not modify (but feel free to read)
let firstName = document.querySelector('#first-name');
let lastName = document.querySelector('#last-name');

let answer1 = document.querySelector('#answer1');
let answer2 = document.querySelector('#answer2');
let answer3 = document.querySelector('#answer3');
let answer4 = document.querySelector('#answer4');
let answer5 = document.querySelector('#answer5');

function render() {
  let passport = new Passport(firstName.value, lastName.value);

  answer1.textContent = passport.getFirstName();
  answer2.textContent = passport.getLastName();
  answer3.textContent = passport.getFullName();
  answer4.textContent = passport.getInitials();
  answer5.textContent = passport.getIsValidName();
}

firstName.addEventListener('keyup', render);
lastName.addEventListener('keyup', render);
