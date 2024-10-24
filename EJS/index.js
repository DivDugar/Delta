const express = require("express");
const path = require("path");
const app = express();

const port = 8080;

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.get("/", (req, res) =>{
    res.render("home");
})

app.get("/rolldice", (req, res) =>{
    let diceVal = Math.floor(Math.random()*6 + 1)
    res.render("rolldice", {num: diceVal});
})

app.get("/ig/:username", (req, res) => {
    const followers = ["adam", "bob", "steve"];
    let username = req.params.username;
    res.render("instagram", {username, users: followers});
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})