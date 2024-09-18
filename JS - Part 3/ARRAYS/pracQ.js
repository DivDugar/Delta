let months = ['january', 'july', 'march', 'august']; // Make this array - [ 'july', 'june', 'march', 'august' ]

console.log(months.shift());
console.log(months.shift());

console.log(months.unshift('june'));
console.log(months.unshift('july'));

console.log(months);

// ---------------------------------------------------

let months2 = ['january', 'july', 'march', 'august']; // Make this -> [ 'july', 'june', 'march', 'august' ]

console.log(months2.splice(0, 2, "july", "june")); 
console.log(months2);

// ---------------------------------------------------

let languages = ['c', 'C++', 'HTML', 'javascript', 'python', 'java', 'c#', 'sql'];

console.log(languages.reverse().indexOf('javascript'));

// ---------------------------------------------------

// Nested Arrays

let ticTacToe = [['X', null, 'O'], [null, 'X', null], ['O',null, 'X']];

console.log(ticTacToe);

ticTacToe[0][1] = 'O';

console.log(ticTacToe);