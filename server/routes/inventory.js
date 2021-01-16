const express    = require('express')
const fs         = require('fs')
const h          = require('../helper-functions')
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

/* ADD NEW ITEM */
router.post('/', (req, res)=>{
    const item = req.body

    // check for empty inputs
    let invalidProperties = h.validateProperties(item)
    if(invalidProperties.length > 0){
        res.status(400).json({
            message:'your request was either missing some information, or included some invalid information',
            invalidProperties: invalidProperties
        })
    }

    // assign an id and push into item array
    let id  = uuid()
    item.id = id
    inventories.push(item)

    // write to file and respond with the new item
    fs.writeFile('./data/inventory.json', JSON.stringify(inventories), (err)=>console.log(err))
    let newItem = inventories.find(w => w.id === id)
    res.json(newItem)
})

module.exports = router