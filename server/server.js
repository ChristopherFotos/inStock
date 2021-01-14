const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

require('dotenv').config();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.route("/warehouses")
    .get((request, results) => {
        //return a list of warehouses
    })

    .post((request, results) => {
        //add a warehouse to the list
    })

app.route("/warehouses/:id")
    .get((request, results) => {
        //returns a warehouse at a specific id
    })
    .delete((request, results) => {
        //delete the specific warehouse
    })

app.route("/inventory")
    .get((request, results) => {
        //returns a list of inventory items and what warehouse they are from
    })
    .post((request, results) => {
        //add new item to inventory
    })

app.route("/inventory/:id")
    .get((request, results) => {
        //returns a specific item
        //gives information on that item like the quantitiy and what warehouse(s) it's in
    })
    .delete((request, results) => {
        //delete the specific item
    })

  app.listen(PORT, function(){
    console.log("Server has started");
});