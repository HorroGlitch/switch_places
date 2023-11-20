import './style.css'

let elementList = document.querySelector("#list");
let firstDownArrow  = document.querySelector("#firstDownArrow");
let secondDownArrow = document.querySelector("#secondDownArrow");
let thirdDownArrow = document.querySelector("#thirdDownArrow");

let secondUpArrow = document.querySelector("#secondUpArrow");
let thirdUpArrow = document.querySelector("#thirdUpArrow");
let fourthUpArrow = document.querySelector("#fourthUpArrow");

firstDownArrow.addEventListener("click", ()=>{
  console.log("down");
});

secondDownArrow.addEventListener("click", ()=>{
  console.log("down");
});

thirdDownArrow.addEventListener("click", ()=>{
  console.log("down");
});


secondUpArrow.addEventListener("click", ()=>{
  console.log("up");
});

thirdUpArrow.addEventListener("click", ()=>{
  console.log("up");
});

fourthUpArrow.addEventListener("click", ()=>{
  console.log("up");
});
