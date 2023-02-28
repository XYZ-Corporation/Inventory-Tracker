'use strict';
// ******* GLOBALS ********
let globalArray = [];

//  ******* DOM WINDOWS ********
let canvasElem = document.getElementById('prod-chart');
let formElem = document.getElementById('request-form');




// ******* CONSTRUCTOR FUNCTION ********
function Inventory(name,amount,price){
  this.name = name;
  this.amount = Math.floor(Math.random() * 37 + 4);
  this.price = price;
  this.min = Math.floor(Math.random() * 37 + 4);


}



function renderChart(){

  let invName = [];
  let invAmount = [];
  let invPrice = [];

  for (let i=0; i < globalArray.length; i++){
    invName.push(globalArray[i].name);
    invAmount.push(globalArray[i].amount);
    invPrice.push(globalArray[i].price);

  }

  let chartObj = {
    type: 'bar',
    data: {
      labels: invName,
      datasets: [{
        label: 'Quantity',
        data: invAmount,
        borderWidth: 5,
        backgroundColor: ['lightgreen'],
        borderColor: ['lightgreen']
      },
      {
        label: 'Price',
        data: invPrice,
        borderWidth: 5,
        backgroundColor: ['green'],
        borderColor: ['green']
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

renderChart();
// ***** EXECTUABLE CODE ******
let pearInv = new Inventory('pear',50);
let fishInv = new Inventory('fish',50);
let beefInv = new Inventory('beef',25,50);
let chickenInv = new Inventory('chicken',25,50);
let potatoInv = new Inventory('potato',25,50);
let riceInv = new Inventory('rice',25,50);
let pastaInv = new Inventory('pasta',25,50);
let breadInv = new Inventory('bread',25,50);
let saladInv = new Inventory('salad',25,50);
let ketchupInv = new Inventory('ketchup',25,50);
let soupInv = new Inventory('soup',25,50);
let porkInv = new Inventory('pork',25,50);


globalArray.push(pearInv,fishInv,beefInv,chickenInv,potatoInv,riceInv,pastaInv,breadInv,saladInv,ketchupInv,soupInv,porkInv);

























