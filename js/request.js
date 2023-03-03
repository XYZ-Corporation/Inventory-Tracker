'use strict';



let tableElement = document.getElementById('table');
let paraElement = document.getElementById('order-history');
let purchaseHistory = [];
let userInput = [];
let minStorage = [];
let parsedLocalStorage;
let retrievedStorage;
let requested = [];
let totalAmount = 0;
let myGlobal = localStorage.getItem('myGlobal');
console.log(myGlobal);
function restockInventory(inventory) {
  let myArray = JSON.parse(inventory);
  
  for (let i=0; i < myArray.length; i++) {
    myArray[i].amount= 50;
    // let reset= myArray[i].max;
    // console.log(item);
    // item = reset;
    console.log(myArray[i]);
  } 

  localStorage.setItem('myGlobal', JSON.stringify(myArray) );
}



retrievedStorage = localStorage.getItem('myPurchase');
parsedLocalStorage = JSON.parse(retrievedStorage);
console.log(parsedLocalStorage);
function render() {

  for (let i = 0; i < parsedLocalStorage.length; i++) {
    let nameRow = document.createElement('tr');
    nameRow.setAttribute('id','nameRow');
    tableElement.appendChild(nameRow);
    let itemName = document.createElement('td');
    itemName.setAttribute('id','name');
    nameRow.appendChild(itemName);
    itemName.textContent = parsedLocalStorage[i].name;
  

    let requestedRow = document.createElement('tr');
    nameRow.appendChild(requestedRow);
    let requestedAmount = document.createElement('td');
    requestedAmount.setAttribute('id','qty');
    requestedRow.appendChild(requestedAmount);
    requestedAmount.textContent = parsedLocalStorage[i].min - parsedLocalStorage[i].amount;

    let amountRow = document.createElement('tr');
    requestedRow.appendChild(amountRow);
    let itemAmount = document.createElement('td');
    itemAmount.setAttribute('id', 'price');
    amountRow.appendChild(itemAmount);
    itemAmount.textContent = parsedLocalStorage[i].price;
  }


  function footer() {
    let totalAmounts = document.createElement('tfoot');
    let totalRow = document.createElement('tr');
    totalAmounts.appendChild(totalRow);

    let totalLabel = document.createElement('td');
    totalLabel.textContent = 'Total';
    totalRow.appendChild(totalLabel);

    let totalAmount = document.createElement('td');
    totalAmount.setAttribute('id','totalPrice');
    totalAmount.textContent = calculateTotal()[0];
    totalRow.appendChild(totalAmount);

    tableElement.appendChild(totalAmounts);
  }

  footer();

}



let purchaseObject = {
  
  total : calculateTotal()[0],
  name : calculateTotal()[1],
  
};
purchaseHistory.push(purchaseObject);
console.log('test',purchaseHistory[0]);

render();

function calculateTotal() {
  let total = 0;
  let names = [];
  for (let i = 0; i < parsedLocalStorage.length; i++) {
    total += parsedLocalStorage[i].price * (parsedLocalStorage[i].min - parsedLocalStorage[i].amount);
    names.push(parsedLocalStorage[i].name);
  }
  return [total,names];
  
}




let requestButton = document.getElementById('request-button');

requestButton.addEventListener('click', requestHandler);

function requestHandler(event){
  restockInventory(myGlobal);
  // event.preventDefault();
  function objectRender() {
    for (let i=0; i < purchaseHistory.length; i++) {
      let previousAmount = document.createElement('p');
      paraElement.appendChild(previousAmount);
      // previousAmount.textContent = purchaseHistory;
      previousAmount.textContent = `${purchaseHistory[i].name}:${purchaseHistory[i].total}`;

    }
    console.log('test2');
  }
  storePurchase();
  objectRender();


}
