'use strict';
// ******* GLOBALS ********
let globalArray = [];
console.log(globalArray);



//  ******* DOM WINDOWS ********
let canvasElem = document.getElementById('prod-chart');
let formElem = document.getElementById('request-form');
let restock = document.getElementById('restock-button');


// ******* CONSTRUCTOR FUNCTION ********
function Inventory(name, price) {
  this.name = name;
  this.amount = Math.floor(Math.random() * 37 + 4);
  this.price = price;
  this.min = Math.floor(Math.random() * 37 + 4);
  // this.status = 0;

}



function renderChart() {

  let invName = [];
  let invAmount = [];
  let invMin = [];

  for (let i = 0; i < globalArray.length; i++) {
    invName.push(globalArray[i].name);
    invAmount.push(globalArray[i].amount);
    invMin.push(globalArray[i].min);

  }

  let chartObj = {
    type: 'bar',
    data: {
      labels: invName,
      datasets: [{
        label: 'Quantity',
        data: invAmount,
        borderWidth: 5,
        backgroundColor: ['green'],
        borderColor: ['green']
      },
      {
        label: 'Min Qty',
        data: invMin,
        borderWidth: 5,
        backgroundColor: ['red'],
        borderColor: ['red']
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  };
  new Chart(canvasElem, chartObj); ///eslint-disable-line
}

function minInventory(event) {
  let counter = 0;
  for (let i = 0; i < globalArray.length; i++) {
    if (globalArray.amount[i] < globalArray.min[i]) {
      counter++;
    }
  }
  if (counter != 0) {

  }
}


// ***** EXECTUABLE CODE ******
let pearInv = new Inventory('pear', 40);
let fishInv = new Inventory('fish', 50);
let beefInv = new Inventory('beef', 50);
let chickenInv = new Inventory('chicken', 50);
let potatoInv = new Inventory('potato', 50);
let riceInv = new Inventory('rice', 50);
let pastaInv = new Inventory('pasta', 50);
let breadInv = new Inventory('bread', 50);
let saladInv = new Inventory('salad', 50);
let ketchupInv = new Inventory('ketchup', 50);
let soupInv = new Inventory('soup', 50);
let porkInv = new Inventory('pork', 50);


globalArray.push(pearInv, fishInv, beefInv, chickenInv, potatoInv, riceInv, pastaInv, breadInv, saladInv, ketchupInv, soupInv, porkInv);


renderChart();

resultsBtn.addEventListener('load', minInventory);

resultsBtn2.addEventListener('click', handleShowResults2);


//***************** optional chart, start 
  // const config = {
  //   type: 'bar',
  //   data: data,
  //   options: {
  //     plugins: {
  //       title: {
  //         display: true,
  //         text: 'Chart.js Bar Chart - Stacked'
  //       },
  //     },
  //     responsive: true,
  //     scales: {
  //       x: {
  //         stacked: true,
  //       },
  //       y: {
  //         stacked: true
  //       }
  //     }
  //   }
  // };
  //*************** optional chart, end
















