const express = require('express');

const app = express();

const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello World!');
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
