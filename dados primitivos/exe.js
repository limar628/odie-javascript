
let data = 42;
// dataCopy will store a copy of what data contains, so a copy of 42
let dataCopy = data;

// which means that making changes to dataCopy won't affect data
dataCopy = 43;

console.log(data); // 42
console.log(dataCopy); // 43

let person = "john";
let anotherPerson = person;

anotherPerson = "peter";
console.log(person); // john
console.log(anotherPerson); // peter


function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}
const player = new Player('steve', 'X');
console.log(player.name); // 'steve'
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(this.name)
  };
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');
player1.sayName(); // logs 'steve'
player2.sayName(); // logs 'also steve'

