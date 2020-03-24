// THIS IS THE MEMBERS ROUTE
const express = require('express');
const router = express.Router();
const members = require('../data/memberData');

// Handle GET: 
router.get('/', (req, res) => {
    res.json(members);
} );

router.get('/:id', (req, res) => {
    const response = members[req.params.id -1];
    if(response) res.json( response );
    else         res.status(400).json('Member ' + req.params.id + ' not Found');
});


// Handle POST : 
router.post( '/', (req, res) => {
    res.send( req.body );
} )
module.exports = router;