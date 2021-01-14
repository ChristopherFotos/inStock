const express    = require('express')
const fs         = require('fs')
const {v4: uuid} = require('uuid');
const cors      = require('cors')
const router    = express.Router()

/* import the data */
const warehouses      = require('../data/warehouses.json')

/* get all warehouses */
router.get('/', (req, res)=>{
    res.json(warehouses)
})

module.exports = router

