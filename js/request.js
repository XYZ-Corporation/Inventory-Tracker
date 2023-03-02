'use strict';



let tableElement = document.getElementById('table');
let purchaseHistory = [];
let userInput = [];
let minStorage = [];
let parsedLocalStorage;
let retrievedStorage;
let requested = [];
let totalAmount = 0;

console.log(totalAmount);

retrievedStorage = localStorage.getItem('myPurchase');
parsedLocalStorage = JSON.parse(retrievedStorage);

function render() {

  for (let i = 0; i < parsedLocalStorage.length; i++) {
    let nameRow = document.createElement('tr');
    tableElement.appendChild(nameRow);
    let itemName = document.createElement('td');
    nameRow.appendChild(itemName);
    itemName.textContent = parsedLocalStorage[i].name;
  

    let requestedRow = document.createElement('tr');
    nameRow.appendChild(requestedRow);
    let requestedAmount = document.createElement('td');
    requestedRow.appendChild(requestedAmount);
    requestedAmount.textContent = parsedLocalStorage[i].min - parsedLocalStorage[i].amount;

    let amountRow = document.createElement('tr');
    requestedRow.appendChild(amountRow);
    let itemAmount = document.createElement('td');
    amountRow.appendChild(itemAmount);
    itemAmount.textContent = parsedLocalStorage[i].price;
  }
  function footer() {
    let totalAmounts = document.createElement('tfoot');
    tableElement.appendChild('totalAmounts');

    let totals = document.createElement('td');
    textContent = totalAmount;

    counter();


  }
  function counter() {

    for (let i = 0; i < parsedLocalStorage.length; i++) {
      totalAmount += parsedLocalStorage[i].price;

    }

    return totalAmount;
  }
}








render();

console.log(parsedLocalStorage);

