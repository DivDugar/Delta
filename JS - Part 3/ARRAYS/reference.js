// Array References - address in memory

// The variables holding the arrays essentially stores the address of the first element

let arr = ['a', 'b', 'c'];

let arrCopy = arr;

console.log(arr == arrCopy);

arr.push('d');

console.log(arrCopy);

arrCopy.pop();

console.log(arr);

// Constant Array - This makes the address of the variable holding the array constant, we cannot override the address by passing the reference of another array / redeclaring it.

const a = [1, 2, 3, 4];

// Nested Array - or Multi-Dimentional Arrays

const nums = [[1, 2], [3, 4], [4, 5]];

console.log(nums);
console.log(nums.length);
console.log(nums[0]);
console.log(nums[0][0]); // nums[rowNumber][columnNumber]