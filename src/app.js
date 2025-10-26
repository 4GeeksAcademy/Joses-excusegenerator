import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}


function displayExcuse() {
  const excuse = `${getRandom(who)} ${getRandom(action)} ${getRandom(what)} ${getRandom(when)}.`;
  document.getElementById('excuse').innerHTML = excuse;
}


window.onload = displayExcuse;


const button = document.getElementById('generateBtn');
button.addEventListener('click', displayExcuse);
