// Dependencies:
const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const port = 5000;
// Instance App---------------
const app = express();
app.use( express.static( path.join(__dirname, 'public') ) );
app.use( logger );
app.use( express.json() );
app.use( express.urlencoded( {extended : false} ) );

// Routers:
app.use('/api/members', require('./routes/api/member'));


// Listen
app.listen(port, () => console.log("Listening on port " + port))
