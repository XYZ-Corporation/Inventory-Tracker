'use strict';

let tableElement = document.getElementById('table');
let purchaseHistory = [];
let userInput = [];
let minStorage = [];
let parsedLocalStorage;
let retrievedStorage; 

retrievedStorage = localStorage.getItem('myPurchase');
parsedLocalStorage = JSON.parse(retrievedStorage);

function render() {
  for (let i = 0; i < parsedLocalStorage.length; i++) {
    let nameRow = document.createElement('tr');
    tableElement.appendChild(nameRow);
    let itemName = document.createElement('td');
    nameRow.appendChild(itemName);
    itemName.textContent = parsedLocalStorage[i].name;
    console.log(minStorage);


    let amountRow = document.createElement('tr');
    nameRow.appendChild(amountRow);
    let itemAmount = document.createElement('td');
    amountRow.appendChild(itemAmount);
    itemAmount.textContent = parsedLocalStorage[i].price;

  }



};

render();


console.log(parsedLocalStorage);

