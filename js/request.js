'use strict';

let tableElement = document.getElementById('table');
let purchaseHistory = [];
let userInput = [];
// let minStorage = [];


function render() {
  for (let i = 0; i < minStorage.length; i++) {
    let nameRow = document.createElement('tr');
    tableElement.appendChild(nameRow);
    let itemName = document.createElement('td');
    nameRow.appendChild(itemName);
    itemName.textContent = minStorage[i].name;
    console.log(minStorage);


    let amountRow = document.createElement('tr');
    nameRow.appendChild(amountRow);
    let itemAmount = document.createElement('td');
    amountRow.appendChild(itemAmount);
    itemAmount.textContent = minStorage[i].price;

  }
  


};

render(); 

function updateStorage() {
    
  let retrievedStorage = getItem('myStorage');

  let parsedStorage = JSON.parse(retrievedStorage);
 
  for()


}