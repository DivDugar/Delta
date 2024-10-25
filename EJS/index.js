const express = require("express");
const path = require("path");
const app = express();

const port = 8080;

// This is necessary in order for the server to know the location of the views directory - if the server is not started from the EJS directory, without specifying it's path - we will encounter an error.
app.set("views", path.join(__dirname, "/views"));
//
app.set("view engine", "ejs");
// Serving Static Files (Including CSS and JS Pages)
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) =>{
    res.render("home");
})

app.get("/rolldice", (req, res) =>{
    let diceVal = Math.floor(Math.random()*6 + 1)
    res.render("rolldice", {num: diceVal});
})

app.get("/ig/:username", (req, res) => {
    // const followers = ["adam", "bob", "steve"];
    // res.render("instagram", {username, users: followers});
    
    const instaData = require("./data/data.json");
    let username = req.params.username;

    const data = instaData[username];

    if(data){
        res.render("instagram", {data});
    }else{
        res.render("error")
    }
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})