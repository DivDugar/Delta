h1 = document.querySelector('h1');

function changeColor(color, delay, nextColor){
    setTimeout(()=>{
        h1.style.color = color;
        if(nextColor) nextColor();
    },delay)
}

// changeColor("red", 1000);
// changeColor("orange", 2000);
// changeColor("pink", 3000);

// callback nesting -> callback hell
changeColor("red", 1000, ()=> {
    changeColor("orange", 1000, ()=> {
        changeColor("pink", 1000);
    })
})
