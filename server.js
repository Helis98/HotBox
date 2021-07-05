const express = require('express');
const mongoose = require('mongoose');
const boxRouter = require('./routes/boxRoutes.js');
const cors = require('cors');



const app = express();

app.use(cors());
app.options('*', cors()); 


app.use(express.json()); // Make sure it comes back as json





require('dotenv').config()
const uri = process.env.MONGO_URL
const code = process.env.CODE


mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(uri);

app.use(boxRouter);

app.post("/getcode", async (req,res) => {
  
  try{
    const admin = req.body.code;
    if(admin == code){
      res.sendStatus(200);
    }
    else{
      res.status(406).send("Code is wrong");
    }
  }
  catch(err){
    res.status(500).send(err);
  }

})


app.get('/', function(req, res){
    res.render('./frontend/src/index.js');
  });

const port = process.env.PORT || 5000;

app.listen(port, () => { console.log('Server is running...') }); //Listen on port 5000
