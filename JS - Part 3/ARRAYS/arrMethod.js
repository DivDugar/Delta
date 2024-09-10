// Array Methods

let car = ["Toyota", "BMW", "MARUTI", "XUV"];
let primary = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];
let secondary = ['black', 'white', 'pink'];
let colors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];
let squares = [9, 4, 49, 64, 25, 36];

// Push - Add to the end
car.push("Hundai");
console.log(car);

// Pop - Deletes form the end and returns it - this can help storing the deleted element (useful to view blocked followers on instagram)
console.log(car.pop());
console.log(car);

// Unshift - Add to the start
car.unshift("Hundai");
console.log(car);

// Shift - Deletes from the start and returns it - this can help storing the deleted element (useful to view blocked followers on instagram)
console.log(car.shift());
console.log(car);

// indexOf('string') - Returns index of something
console.log(primary.indexOf('violet'));
console.log(primary.indexOf('green'));

// includes('string') - if found, returns true else false
console.log(primary.includes('violet'));
console.log(primary.includes('black'));

// concat - merge to arrays (NOTE: THIS DOES NOT CHANGE THE ARRAY, IT CREATES A NEW ARRAY)
let allColors = primary.concat(secondary);
console.log(allColors);

// reverse - reverse and array (NOTE: THIS CHANGES THE ORIGINAL ARRAY)
console.log(primary.reverse());
console.log(primary.reverse()); // reverse the array back to it's original form

// slice(start, end) - similar to strings (ending index is exclusive)
console.log(primary.slice(1, 4));
console.log(primary.slice(2));
console.log(primary.slice(-1));

// splice - removes/replaces/add elements in place (It changes the original array unlike slice)
// splice(start, deleteCount, item0...itenN)

console.log(colors.splice(4));
console.log(colors);

console.log(colors.splice(0,1));
console.log(colors);

colors.splice(0,1, "black", "grey");
console.log(colors);

// sort: sorts an array

console.log(colors.sort());
console.log(squares.sort()); // This does not works with numbers, since it first converts them into string and hence the result is not as expected.