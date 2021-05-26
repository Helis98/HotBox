const express = require('express');
const boxModel = require('../models/BoxSchema');
const crypto = require("crypto");
const bodyParser = require('body-parser');
const { db } = require('../models/BoxSchema');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.post("/addbox", async (req, res) => {
    req.body.BoxID = crypto.randomBytes(8).toString('hex');
    const Box = new boxModel(req.body);
    
    try {
        await Box.save();
        res.send(Box);
      } catch (err) {
        res.status(500).send(err);
      }
});

app.get("/getorder", async (req,res) => {
    const Box = await boxModel.find({});
    try{
      res.send(Box);
    }catch(err){
      res.status(500).send(err);
    }
    
});



/*app.delete("/deletebox", async (req,res) => {
    const Box = await boxModel.find({});
    Box
})*/

app.patch("/boxstatus", async (req, res) => {
    const id = req.body.BoxID;
    //const updateStatus = req.body.status;
    const update = {Empty: req.body.status};

    const box = await boxModel.findOneAndUpdate(id, update);
    /*try{
      var box = await boxModel.find({BoxID : id});
    }catch(err){
      res.status(500).send("died looking");
    }

    try{
      box.Empty = updateStatus;
    }catch(err){
      res.status(500).send("died updating");
    }*/
    
    try {
        await box.save();
        res.send(box.Empty);
    } catch(err){
      res.status(500).send(err);
    }

});

module.exports = app