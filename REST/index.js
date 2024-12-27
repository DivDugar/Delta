const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

app.use(express.urlencoded({extended: true}));
// override with POST having ?_method=DELETE / PATCH / PUT
app.use(methodOverride('_method'))

app.set('view engine', "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.redirect("/posts");
})

// Our Resource is posts
let posts = [
    {
        id: uuidv4(),
        username: "apnacollege",
        content: "I love you coding"
    },
    {
        id: uuidv4(),
        username: "divyanshu",
        content: "I love you coding too"
    },
    {
        id: uuidv4(),
        username: "tripti",
        content: "I love you divyanshu"
    }
]

// API 1 - (R)Get All Posts
app.get("/posts", (req, res) => {
    res.render("index", {posts})
})

// API 2 - (C)Add/Create Posts

// Serve the form
app.get("/posts/new", (req, res) => {
    res.render("new");
})

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    
    let id = uuidv4();
    
    posts.push({id, username, content});
    
    console.log(req.body);
    res.redirect("/posts");
})

// Retrive and show individual post
app.get("/posts/:id", (req, res) => {
    let id = req.params.id;
    let post = posts.find((post) => post.id === id);
    console.log(post);
    res.render("show", {post});
})

// API 3 - (U)Update PATCH instead of PUT here

app.patch('/posts/:id', (req, res) => {
    let id = req.params.id;
    let content = req.body.content;

    let post = posts.find((p) => p.id === id);
    post.content = content;
    console.log(post);
    
    res.redirect("/posts");
})

app.get('/posts/:id/edit', (req, res) => {
    let id = req.params.id;

    let post = posts.find((p) => p.id === id);

    res.render("edit", {post});
})

// API 4 - (D)Delete
app.delete("/posts/:id", (req, res) => {
    id = req.params.id;
    posts = posts.filter((post) => post.id != id);
    res.redirect("/posts");
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})