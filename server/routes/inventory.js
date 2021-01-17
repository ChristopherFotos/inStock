const express    = require('express')
const fs         = require('fs')
const h          = require('../helper-functions')
const {v4: uuid} = require('uuid');
const cors      = require('cors');
const router    = express.Router();

router.use(cors());


/* import the data */
const inventories = require('../data/inventories.json');
const warehouses = require('../data/warehouses.json');

router.route('/')
    .get((req,res) => {
        console.log("ROUTE YES");
        res.json(inventories)
    })

router.get('/:id', (req,res)=>{
    let id = req.params.id
    let inventory = inventories.filter(i => i.inventoryID === id)

    if(inventory.length < 1) res.status(404).json({error: "We couldn't find any items associated with that inventory ID"})

    res.json(inventory)
})

/* copied format from warehouse *?
/* GET A SINGLE INVENTORY */
router.get('/:id', (req,res)=>{
    const inventory = inventories.find(w => i.id === req.params.id)
    inventory ? res.json(inventory) : res.status(404).send("We couldn't find a inventory with that ID")
})

/* copied format from warehouse *?
/* GET A SINGLE INVENTORY */
router.get('/:id', (req,res)=>{
    const inventory = inventories.find(w => i.id === req.params.id)
    inventory ? res.json(inventory) : res.status(404).send("We couldn't find a inventory with that ID")
})

/* ADD NEW inventory */
router.post('/', (req, res)=>{
    const inventory = req.body

    // check for invalid inputs
    let invalidProperties = h.validateProperties(inventory)
    if(invalidProperties.length > 0){
        res.status(400).json({
            message:'your request was either missing some information, or included some invalid information',
            incorrectProperties: invalidProperties
        })
    }

    // assign an id and push into inventory array
    let id = uuid()
    inventory.id = id
    inventories.push(inventory)

    // write to file and respond with the new inventory
    fs.writeFile('./data/inventories.json', JSON.stringify(inventories), (err)=>console.log(err))
    let newWarehouse = inventories.find(i => i.id === id)
    res.json(newInventory)
})

/* EDIT an inventory */
router.patch('/:id', (req,res)=>{
    // find the inventory to edit and remove it from the database
    let id = req.params.id
    let inventory = inventories.find(i => i.id === id)
    !inventory && res.status(404).send('item does not exist')
    let index = inventories.indexOf(inventory)
    inventories.splice(index, 1)

    // check for invalid inputs
    let newInventory = req.body
    let invalidProperties = h.validateProperties(newInventory)
    if(invalidProperties.length > 0){
        res.status(400).json({
            message:'your request was either missing some information, or included some invalid information',
            incorrectProperties: invalidProperties
        })
    }

    // push the edited version into the database, write to file and return the edited version
    inventories.push(newInventory)
    
    fs.writeFile('./data/inventories.json', JSON.stringify(inventories), (err)=>{
        if(err) console.log(err)

        let newInventoryinDatabase = inventories.find(i => i.id === req.params.id)
        console.log('NEW INV: ', newInventoryinDatabase)
        inventories.push(newInventory)
        res.json(newInventoryinDatabase)
    })

})


/* DELETE an inventory */
router.delete('/:id', (req,res)=>{
    // find the inventory to delete and remove it from the database
    let id = req.params.id
    let inventory = inventories.find(i => i.id === id)
    let index = inventories.indexOf(inventory)
    inventories.splice(index, 1)
})
module.exports = router
