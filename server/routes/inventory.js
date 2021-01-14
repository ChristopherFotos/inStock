const express    = require('express')
const fs         = require('fs')
const {v4: uuid} = require('uuid');
const cors      = require('cors')
const router    = express.Router()
router.use(cors())
/* import the data */
const inventories      = require('../data/inventories.json')
const warehouses      = require('../data/warehouses.json')

module.exports = router