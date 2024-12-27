// function hello(){
//     console.log("Inside hello function");
//     console.log("hello");
// }

// function demo(){
//     console.log("Calling hello function");
//     hello();
// }

// console.log("Calling demo function");
// demo();
// console.log("Done Bye!");

console.log("-----------------------------------");

function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}

three();

/*
    --- 5 - one ---
    --- 4 - one ---
    --- 3 - one ---
    --- 2 - two ---
    --- 1 - three ---
*/