const express = require('express');
const boxModel = require('../models/BoxSchema');
const bodyParser = require('body-parser');
const { db } = require('../models/BoxSchema');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.post("/addbox", async (req, res) => {
    const Box = new boxModel(req.body);
    
    try {
        await Box.save();
        res.send(Box);
      } catch (err) {
        res.status(500).send(err);
      }
});

/*app.patch("/boxstatus", async (req, res) => {
    const updateStatus = req.body;
    try {
        
    }

})
*/
module.exports = app