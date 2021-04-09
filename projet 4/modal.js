function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// js

var form = document.getElementById('form');
var first = document.getElementById('first');
var last = document.getElementById('last');
var email = document.getElementById('email');
var birthdate = document.getElementById('birthdate');
var quantity = document.getElementById('quantity');
let myRegex = new RegExp ("/^[a-zA-Z]{2,}[\s]*$/");
let regexAdresseMail = new RegExp ("/^[a-zA-Z0-9._-]{2,}[@]{1}[a-zA-Z0-9.]+$/");
let regexBirthDate = new RegExp ("/^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$/");
let regexQuantity = new RegExp ("/^[0-9]*$/");


form.addEventListener('submit', (e) => validate(e));

function validate(e){
  e.preventDefault();

  if(first.value == ""){
    first.style.border = "1px solid red";
  }else if(myRegex.test(first.value) === true){
    first.style.border = "1px solid green";
  }

  console.log(last.value);
  console.log(myRegex.test(last.value));
  if(last.value == ""){
    last.style.border = "1px solid red";
  }else if(myRegex.test(last.value) === true){
    last.style.border = "1px solid green";
  }

  if(email.value == "" ){
    email.style.border = "1px solid red";
  }else if(regexAdresseMail.test(email.value) === true){
    email.style.border = "1px solid green";
  }

  if(birthdate.value == ""){
    birthdate.style.border = "1px solid red";
  }else if(regexBirthDate.test(birthdate.value) === true){
    birthdate.style.border = "1px solid green";
  }
  
  if(quantity.value == ""){
    quantity.style.border = "1px solid red";
  }else if(regexQuantity.test(quantity.value) === true){
    quantity.style.border = "1px solid green";
  }
}
