'use strict';


let login = document.getElementById('login-button');
login.addEventListener('click', loginHandler);

function loginHandler(event) {
  event.preventDefault();
  document.location.href = '/inventory.html';
}