// String Methods

// --------------------------------------------------------------------------------------------

// trim() - Trims whitespaces from both ends of the string and returns a new one.

let msg = "  Hello  ";

console.log(msg.trim());

// --------------------------------------------------------------------------------------------

// toUpperCase(), toLowerCase()

let str = "Random String";

console.log(str.toUpperCase());
console.log(str.toLowerCase());

// --------------------------------------------------------------------------------------------

// indexOf("subString") - Returns the "first index of occurrence" of the argument passed in the string. Or gives -1 if not found

str = "ILoveCoding";
console.log(str.indexOf("Coding"));
console.log(str.indexOf("z"));

// --------------------------------------------------------------------------------------------

// Method Chaining (cascading) - it operaters from left to right

str = "        Hello"

console.log(str.trim().toUpperCase());

// --------------------------------------------------------------------------------------------

// slice(startIndex, endIndex) - returns a part of the original string as a new string, endIndex is not inclusive
// slice(startIndex) - returns everything starting from the startIndex
// slice(negativeValue) - str.slice(length-1) --> last (negativeValue) digits will be returned;

str = "IloveCoding"

console.log(str.slice(1,5)); // startingIndex, endingIndex
console.log(str.slice(5)); // startingIndex
console.log(str.slice(-1)); // negative

// --------------------------------------------------------------------------------------------

// replace("oldValue", "newValue") - replaces the oldValue with newValue in the string and returns a new string

console.log(str.replace("love","do"));

// --------------------------------------------------------------------------------------------

// repeat(num) - Returns a string with the number of copies of a string

console.log(str.repeat(3));

// --------------------------------------------------------------------------------------------

// 

// --------------------------------------------------------------------------------------------

