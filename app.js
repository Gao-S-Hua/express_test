// Dependencies:
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Instance App---------------
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World');
})

// Listen
app.listen(8000, () => console.log("Listening on port 8000!"))
