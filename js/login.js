'use strict';


let login = document.getElementById('login-button');
login.addEventListener('click', loginHandler);

let register = document.getElementById('register-button');
register.addEventListener('click', registration);

let userInfo = localStorage.getItem('userData');
let parsedUserInfo = JSON.parse(userInfo);

// used to identify which user is accessing in inventory/request pages.
let identityNum;

function registration(event) {
  event.preventDefault();
  document.location.href = '/signup.html';
}
function loginHandler(event) {
  event.preventDefault();
  let idInput = document.getElementById('Username').value;
  let passwordInput = document.getElementById('Password').value;

  for (let i = 0; i < parsedUserInfo.length; i++){
    if (parsedUserInfo[i].id === idInput && parsedUserInfo[i].password === passwordInput){
      identityNum = i;
      localStorage.setItem('userNum', JSON.stringify(identityNum));
      document.location.href = '/inventory.html';
    }
  }
}
