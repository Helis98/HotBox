const express = require('express');
const boxModel = require('../models/BoxSchema');
const crypto = require("crypto");
const bodyParser = require('body-parser');
const { db } = require('../models/BoxSchema');
const mongoose = require('mongoose');
const qr_code = require('qrcode');
const { Code } = require('mongodb');
const app = express();
//const cors = require('cors');

//const JsBarcode = require('jsbarcode');
//const Canvas = require('canvas');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
mongoose.set('useFindAndModify', false);
//app.options('/deletebox', cors());


app.post("/addbox", async (req, res) => {                   //Adds box to the database, without ordernumber and with a randomized BoxID
    req.body.BoxID = crypto.randomBytes(8).toString('hex');
    const Box = new boxModel(req.body);
    
    try {
        await Box.save();
        res.send(Box);
      } catch (err) {
        res.status(500).send(err);
      }
});

app.patch("/giveorder", async (req,res) => {                //Gives an order to the database by specifying the boxid and the order number
  
  const id = req.body.BoxID;
  const order =  req.body.orderNumber;
 // const qr = {QRCode: crypto.randomBytes(8).toString('hex')};
  
/*  const qr = await qr_code.toDataURL("some string");      //Beginning of QRcode implementation
  const code = Buffer.from(qr, 'base64');
  const qrx = {QRCode: code};
*/
/*
await boxModel.findOneAndUpdate(id, order);
const box = await boxModel.findOneAndUpdate(id, qrx);
*/
//const canvas = new Canvas();

//JsBarcode(canvas, order, {
//  displayValue: false
//});


try{
  const box = await boxModel.findOneAndUpdate({BoxID: id}, {orderNumber: order}, {new: true});
  await box.save();
  res.sendStatus(200);
}catch(err){
  res.status(500).send(err);
}

});



app.get("/getorder", async (req,res) => {                   //Gets an existing order from the database and send to a box
    const Box = await boxModel.find({});
    try{
      res.send(Box);
    }catch(err){
      res.status(500).send(err);
    }
    
});

app.get("/getstatus", async (req,res) => {                  //Gets the status of a box, if it is empty or not
  const id = req.body.BoxID;
  const Box = await boxModel.findOne({BoxID : id});
  //const response = Box.Empty;
  try{
    res.send(Box.Empty);
  }catch(err){
    res.status(500).send(err);
  }
  
});




app.delete("/deletebox/:id", async (req,res) => {               //Deletes a box from the database
    const id = req.params.id;
//localhost.../deletebox/0a6546f13e633b42
    try{
      await boxModel.findOneAndDelete({BoxID: id});
      res.sendStatus(200);
    }catch(err){
      res.status(500).send("Box doesnt exist?");
    }
})

app.patch("/boxstatus", async (req, res) => {                //Updates box status for empty field, so true or false
    const id = req.body.BoxID;
    const update = req.body.status

    try {
        const box = await boxModel.findOneAndUpdate({BoxID: id}, {Empty: update}, {new: true});
        await box.save();
        res.send(box.Empty);
    } catch(err){
      res.status(500).send(err);
    }

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
    
});




module.exports = app