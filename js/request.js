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
let myGlobal;
let parseGlobalStorage;

myGlobal = localStorage.getItem('myGlobal');
parseGlobalStorage = JSON.parse(myGlobal);
console.log(parseGlobalStorage);

function restockInventory(inventory) {


  for (let i = 0; i < inventory.length; i++) {
    inventory[i].amount = inventory[i].min;
    console.log(inventory[i]);
  }

  localStorage.setItem('myGlobal', JSON.stringify(inventory));
}



retrievedStorage = localStorage.getItem('myPurchase');
parsedLocalStorage = JSON.parse(retrievedStorage);
console.log(parsedLocalStorage);
function render() {

  for (let i = 0; i < parsedLocalStorage.length; i++) {
    let nameRow = document.createElement('tr');
    nameRow.setAttribute('id', 'nameRow');
    tableElement.appendChild(nameRow);
    let itemName = document.createElement('td');
    itemName.setAttribute('id', 'name');
    nameRow.appendChild(itemName);
    itemName.textContent = parsedLocalStorage[i].name;


    let requestedRow = document.createElement('tr');
    nameRow.appendChild(requestedRow);
    let requestedAmount = document.createElement('td');
    requestedAmount.setAttribute('id', 'qty');
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
    totalLabel.setAttribute('id','totalFooter');
    totalLabel.textContent = 'Total';
    totalRow.appendChild(totalLabel);

    let totalAmount = document.createElement('td');
    totalAmount.setAttribute('id', 'totalPrice');
    totalAmount.textContent = calculateTotal()[0];
    totalRow.appendChild(totalAmount);

    tableElement.appendChild(totalAmounts);
  }

  footer();

}
function makeHeader() {
  let tableHead = document.createElement('thead');
  tableElement.appendChild(tableHead);
  let headerRow = document.createElement('tr');
  tableHead.appendChild(headerRow);
  let itemNameHeader = document.createElement('th');
  itemNameHeader.setAttribute('id', 'item-name');
  headerRow.appendChild(itemNameHeader);
  itemNameHeader.textContent = 'Item Name';
  let qtyHeader = document.createElement('th');
  qtyHeader.setAttribute('id', 'qtyTitle');
  headerRow.appendChild(qtyHeader);
  qtyHeader.textContent = 'Qty';
  let priceHeader = document.createElement('th');
  priceHeader.setAttribute('id', 'priceTitle');
  headerRow.appendChild(priceHeader);
  priceHeader.textContent = 'Price';
}



// function makeHeader() {
//   let tableHead = document.createElement('thead');
//   let tableRow = document.createElement('tr');
//   tableHead.appendChild(tableRow);

//   let tableItem1 = document.createElement('td');
//   tableItem1.setAttribute('id', 'item-name');
//   tableItem1.textContent = 'Item Name';
//   tableRow.appendChild(tableItem1);

//   let tableItem2 = document.createElement('td');
//   tableItem2.setAttribute('id', 'qtyTitle');
//   tableItem2.textContent = 'Qty';
//   tableRow.appendChild(tableItem2);

//   let tableItem3 = document.createElement('td');
//   tableItem3.setAttribute('id', 'priceTitle');
//   tableItem3.textContent = 'Price';
//   tableRow.appendChild(tableItem3);
// let tableHead = document.createElement('thead');
// let tableHeadRow = document.createElement('tr');
// tableHeadRow.setAttribute('id', 'item-name');
// tableElement.appendChild(tableHeadRow);
// tableHeadRow.textContent = 'Item Name';
// let firstCell = document.createElement('td');
// firstCell.setAttribute('id', 'qtyTitle');
// tableElement.appendChild(firstCell);
// firstCell.textContent = 'Qty';
// let headerEnd = document.createElement('td');
// headerEnd.setAttribute('id', 'priceTitle');
// tableElement.appendChild(headerEnd);
// headerEnd.textContent = 'Price';
// }

makeHeader();



let purchaseObject = {

  total: calculateTotal()[0],
  name: calculateTotal()[1],

};
purchaseHistory.push(purchaseObject);
console.log('test', purchaseHistory[0]);

render();

function calculateTotal() {
  let total = 0;
  let names = [];
  for (let i = 0; i < parsedLocalStorage.length; i++) {
    total += parsedLocalStorage[i].price * (parsedLocalStorage[i].min - parsedLocalStorage[i].amount);
    names.push(parsedLocalStorage[i].name);
  }
  return [total, names];

}




let requestButton = document.getElementById('request-button');

requestButton.addEventListener('click', requestHandler);

function requestHandler(event) {
  restockInventory(parseGlobalStorage);
  // event.preventDefault();
  function objectRender() {
    for (let i = 0; i < purchaseHistory.length; i++) {
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
