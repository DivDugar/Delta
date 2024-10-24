let students = ["Aman", "Shradha", "Tripti", "Divyanshu"];

console.log(students); // Displaying the array students
console.log(students[0]); // Accessing an element in the array
console.log(students.length); // Length of the array (length method)
console.log(typeof students); // Displaying the typeof the array - object

// Array with different types
let arr = [1, 2, "Hello", "Mello"]; // Mixed Array

console.log(arr);
console.log(arr[2][0]) // **** Accessing the character at the 0th index of the string present in the 2nd index of the array - CHAINING [][]
console.log(arr[2].length); // *** Displaying length of the string at index 2

// ARRAYS ARE MUTABLE
let fruits = ["mango", "litchi", "apple"];
fruits[2] = "banana"; // Updating the element at the 2nd index of the array

console.log(fruits);

fruits[7] = "kiwi"; // ** Adding a new element at the 7th index of the array 
console.log(fruits); // ** Index 3-6 will be empty - [ 'mango', 'litchi', 'banana', <4 empty items>, 'kiwi' ]