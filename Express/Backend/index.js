const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

// Converting the data into understandable form - Parsing URL Encoded data
app.use(express.urlencoded({extended: true}));
// Making express read json data
app.use(express.json());

app.get('/register', (req, res)=>{
    // Geting the request through query string
    let {user, password} = req.query;
    res.send(`Standard GET Response. Welcome ${user}`);
})

app.post('/register', (req, res)=>{
    console.log(req.body);
    
    let {user, password} = req.body;
    res.send(`Standard POST Response. Welcome ${user}`);
})

app.get('/:username/:id', (req,res)=>{
    let {username, id} = req.params;
    res.send(`Welcome to the page of @${username}`);
})

app.get('/search', (req, res) => {
    let {q} = req.query;
    if(!q){
        res.send('Nothing searched');
    }
    res.send(`Search results for query: ${q}`);
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
