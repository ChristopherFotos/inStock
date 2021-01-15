const express    = require('express')
const fs         = require('fs')
const {v4: uuid} = require('uuid');
const cors      = require('cors')
const router    = express.Router()
router.use(cors())
/* import the data */
const inventories      = require('../data/inventories.json')
const warehouses      = require('../data/warehouses.json')

router.get('/:id', (req,res)=>{
    let id = req.params.id
    let inventory = inventories.filter(i => i.warehouseID === id)

    if(inventory.length < 1) res.status(404).json({error: "We couldn't find any items associated with that warehouse ID"})

    res.json(inventory)
})

module.exports = router