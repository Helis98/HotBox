const express = require('express');
const boxModel = require('../models/BoxSchema');
const crypto = require("crypto");
const bodyParser = require('body-parser');
const { db } = require('../models/BoxSchema');
const mongoose = require('mongoose');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
mongoose.set('useFindAndModify', false);

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

app.patch("/giveorder", async (req,res) => {
  
  const id = req.body.BoxID;
  const order = {orderNumber: req.body.orderNumber};

const box = await boxModel.findOneAndUpdate(id, order);

try{
  await box.save();
  res.sendStatus(200);
}catch(err){
  res.status(500).send(err);
}

});


app.delete("/deletebox", async (req,res) => {
    const id = req.body.BoxID;

    try{
      await boxModel.findOneAndDelete(id);
      res.sendStatus(200);
    }catch(err){
      res.status(500).send("Box doesnt exist?");
    }
})

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