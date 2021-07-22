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



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
mongoose.set('useFindAndModify', false);
//app.options('/deletebox', cors());

// This takes in the id and the barcode that it scans and checks if it is equal to each other
// I send a string that determines if it is valid
app.get("/checkBarcode", async (req,res) => {
    const id = req.body.id;
    const Box = await boxModel.findOne({BoxID : id});
    
    try {
        if (Box.QRCode == req.body.QRCode)
            res.send("TRUE");  
        else 
            res.send("FALSE");  
    } catch (err) {
        res.status(500).send(err);
    }
});

// Modified version of what was already in boxRoutes. This does not take any paramaters and gets called
// When the order is placed and the box needs the info
app.get("/getorder", async (req,res) => {                   //Gets an existing order from the database and send to a box
    const Box = await boxModel.findOne({Empty : false});
    try {
        if (Box) {
        res.send(Box);
        }else{
        res.status(500).send("No boxes active at this time");
        }
    }catch (err) {
        res.status(500).send(err);
    }
    
});

module.exports = app