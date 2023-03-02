'use strict';
// ******* GLOBALS ********
let globalArray = [];
let globalStatic = [];
let lowStorage = [];



//  ******* DOM WINDOWS ********
let canvasElem = document.getElementById('prod-chart');
// let formElem = document.getElementById('request-form');



// ******* CONSTRUCTOR FUNCTION ********
function Inventory(name, price) {
  this.name = name;
  this.amount = Math.floor(Math.random() * 37 + 4);
  this.price = price;
  this.min = Math.floor(Math.random() * 37 + 4);
  globalArray.push(this);
}


function storePurchase() {
  for (let i = 0; i < globalArray.length; i++) {
    if (globalArray[i].amount < globalArray[i].min) {
      lowStorage.push(globalArray[i]);
    }
  }
  console.log(lowStorage);
  return lowStorage;
}




function renderChart() {

  let invName = [];
  let invAmountMinus = [];
  let invAmountPlus = [];
  let invMinMinus = [];
  let invMinPlus = [];

  for (let i = 0; i < globalArray.length; i++) {
    invName.push(globalArray[i].name);
    if (globalArray[i].amount < globalArray[i].min) {
      invAmountMinus.push(globalArray[i].amount);
      invMinMinus.push(globalArray[i].min - globalArray[i].amount);
      invAmountPlus.push(0);
      invMinPlus.push(0);
    } else {
      invAmountMinus.push(0);
      invMinMinus.push(0);
      invAmountPlus.push(globalArray[i].amount - globalArray[i].min);
      invMinPlus.push(globalArray[i].min);
    }
  }

  let chartObj = {
    type: 'bar',
    data: {
      labels: invName,
      datasets: [{
        label: 'Remaining in deficit',
        data: invAmountMinus,
        borderWidth: 5,
        backgroundColor: ['green'],
        borderColor: ['green']
      },
      {
        label: 'not surplus',
        data: invMinPlus,
        borderWidth: 3,
        backgroundColor: ['green'],
        borderColor: ['red']
      },
      {
        label: 'Deficit',
        data: invMinMinus,
        borderWidth: 5,
        backgroundColor: ['red'],
        borderColor: ['red']
      },
      {
        label: 'excess',
        data: invAmountPlus,
        borderWidth: 5,
        backgroundColor: ['green'],
        borderColor: ['green']
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
          stacked: true
        },
        x: {
          stacked: true
        }
      }
    }
  };
  new Chart(canvasElem, chartObj); //eslint-disable-line
}

// ***** EXECTUABLE CODE ******
new Inventory('pear', 40);
new Inventory('fish', 50);
new Inventory('beef', 50);
new Inventory('chicken', 50);
new Inventory('potato', 50);
new Inventory('rice', 50);
new Inventory('pasta', 50);
new Inventory('bread', 50);
new Inventory('salad', 50);
new Inventory('ketchup', 50);
new Inventory('soup', 50);
new Inventory('pork', 50);


// globalArray.push(pearInv, fishInv, beefInv, chickenInv, potatoInv, riceInv, pastaInv, breadInv, saladInv, ketchupInv, soupInv, porkInv);



renderChart();
storePurchase();

/**********LOCAL STORAGE ************/


let purchaseList = JSON.stringify(lowStorage);
localStorage.setItem('myPurchase', purchaseList);
console.log(purchaseList);

let globalStorage = JSON.stringify(globalArray);
localStorage.setItem('myGlobal', globalStorage);
console.log(globalStorage);



/*************Event Listeners **************/


let restock = document.getElementById('restock-button');
restock.addEventListener('click', restockHandler);

function restockHandler(event) {
  event.preventDefault();
  console.log('request handler');
  document.location.href = '/request.html';
}













