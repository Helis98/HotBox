const express = require('express');
const boxModel = require('../models/BoxSchema');
const crypto = require("crypto");
const bodyParser = require('body-parser');
const { db } = require('../models/BoxSchema');
const mongoose = require('mongoose');
const { Code } = require('mongodb');
const app = express();
//const cors = require('cors');
const JsBarcode = require('jsbarcode');
const {createCanvas} = require('canvas');
const nodemailer = require('nodemailer');
const QRcode = require('qrcode');



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
  
  const id = req.body.BoxNumber;
  const email =  req.body.email;
  const ordernumber = Math.floor(Math.random() * 500) + 1;
  const temp = req.body.temperature;
  const orderString = ordernumber.toString();

  //const canvas = createCanvas();
  /*JsBarcode(canvas, ordernumber, {
    format: 'auto',
    displayValue: false
  });*/

 const code = await QRcode.toDataURL(orderString);

  //const img = canvas.toDataURL();

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASS
    }

  });

  let mailOptions = {
    from: "hotbox0014@gmail.com",
    to: email,
    subject: 'Thank you for ordering with us!',
    text: 'Your order number is: ' + ordernumber + " and it is located in Box Number: " + id + '. Please scan the barcode attached in this email to receive your food!',
    attachments: [
      {
        filename: 'Barcode.png',
        path: code
      }
    ]
  }

    transporter.sendMail(mailOptions, function(error, response){
      if(error){
        res.status(500).send("Unable to send email");
      }else{
        res.status(200);
      }
    })




try{
  const box = await boxModel.findOneAndUpdate({BoxNumber: id}, {orderNumber: ordernumber, Empty: false, Temperature: temp}, {new: true});
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

app.get("/getstatus/:BoxID", async (req,res) => {                  //Gets the status of a box, if it is empty or not
  const id = req.params.BoxID;
  const Box = await boxModel.findOne({BoxID : id});
  //const response = Box.Empty;
  try{
    res.send(Box);
  }catch(err){
    res.status(500).send(err);
  }
  
});




app.delete("/deletebox/:id", async (req,res) => {               //Deletes a box from the database
  const id = req.params.id;
//localhost.../deletebox/0a6546f13e633b42
  try{
    const box = await boxModel.findOneAndDelete({BoxNumber: id});
    if(box == null){
      res.send("Box doesn't exist?")
    }else{
      res.send(box);
    }
  }catch(err){
    res.status(500).send("Something went wrong.");
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

app.post("/boxstatusembedded", async (req, res) => {                //Updates box status for empty field, so true or false
  const id = req.query.BoxID;
  const update = req.query.status;

  // if (update == "true") {
  //   update = true;
  // }
  // else if (update == "false") {
  //   update = false;
  // }

  try {
      const box = await boxModel.findOneAndUpdate({BoxID: id}, {Empty: update}, {new: true});
      await box.save();
      res.send(box.Empty);
  } catch(err){
    res.status(500).send(err);
  }
  
});




module.exports = app