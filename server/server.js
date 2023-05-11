// Importing express 
const express = require('express');
const path = require('path');
const app = express();

// Create variable port for port number
const port = 4000;

//Call to middleware to run on every request made to the server
app.use(express.static('public'))
// app.use(express.static(`${__dirname}/public`))


//entry point for our website
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'))
})
app.get('/styles', (req,res) => {
    res.sendFile(path.join(__dirname,'../public/css/styles.css'))
})
// app.get('/css/styles');
// app.get('/js/app')

//have port to listen for requests
app.listen(port, () => console.log(`Jamming on port: ${port}`));