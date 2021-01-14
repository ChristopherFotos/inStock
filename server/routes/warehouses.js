const express    = require('express')
const fs         = require('fs')
const h          = require('../helper-functions')
const {v4: uuid} = require('uuid');
const cors      = require('cors')
const router    = express.Router()

/* import the data */
const warehouses      = require('../data/warehouses.json')

/* get all warehouses */
router.get('/', (req, res)=>{
    res.json(warehouses)
})

/* add a new warehouse */
router.post('/', (req, res)=>{
    const warehouse = req.body

    // check if all properties are filled in and valid
    if(h.validateProperties(warehouse).length > 0){
        res.status(400).json({
            message:'your request was either missing some information, or included som invalid information',
            incorrectProperties: h.validateProperties(warehouse)
        })
    }

    // assign an id and push into warehouse array
    let id = uuid()
    warehouse.id = id
    warehouses.push(warehouse)

    // write to file and respond with the new warehouse
    fs.writeFile('./data/warehouses.json', JSON.stringify(warehouses), (err)=>console.log(err))
    let newWarehouse = warehouses.find(w => w.id === id)
    res.json(newWarehouse)
})

module.exports = router