'use strict';


let signup = document.getElementById('signup-button');
signup.addEventListener('click', signupHandler);

let userInfo;

// let identity;

function signupHandler(event) {
  event.preventDefault();
  let idInput = document.getElementById('Username').value;
  let passwordInput = document.getElementById('Password').value;

  userInfo = {
    id: idInput,
    password: passwordInput,
    inventory: [],
  };

  function Inventory(name, quantity, price) {
    this.name = name;
    this.amount = Math.floor(Math.random() * 37 + 4);
    this.price = price;
    this.min = Math.floor(Math.random() * 37 + 4);
    userInfo.inventory.push(this);
  }

  new Inventory('pear', 40, 100);
  new Inventory('fish', 50, 150 );
  new Inventory('beef', 50, 300);
  new Inventory('chicken', 50, 150);
  new Inventory('potato', 50, 150);
  new Inventory('rice', 50, 150);
  new Inventory('pasta', 50, 150);
  new Inventory('bread', 50, 150);
  new Inventory('salad', 50, 150);
  new Inventory('ketchup', 50, 150);
  new Inventory('soup', 50, 150);
  new Inventory('pork', 50, 150);

  let savedUsers = JSON.parse(localStorage.getItem('userData')) || [];
  savedUsers.push(userInfo);

  localStorage.setItem('userData', JSON.stringify(savedUsers));

  // identity = savedUsers.length;
  // localStorage.setItem('userNum', JSON.stringify(identity));
  document.location.href = '/index.html';
}
