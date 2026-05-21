const string = "The revolution will not be televised.";
console.log(string);

const  badString = String;

console.log (badString);
const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);

const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);