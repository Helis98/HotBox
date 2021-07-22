const express = require('express');
const mongoose = require('mongoose');
const boxRouter = require('./routes/boxRoutes.js');
const embeddedBoxRouter = require('./routes/embeddedboxRoutes.js');
const cors = require('cors');
const path = require('path');


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
app.use(embeddedBoxRouter);

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

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') 
{
  app.use(express.static(path.join(__dirname, 'frontend', 'build')));

  app.get('*', (req, res) => 
  {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'))
  });

}



/*const publicPath = path.join(__dirname, 'frontend', 'public');
app.use(express.static(publicPath));
*/

//app.use(express.static(path.join(__dirname, 'build')));

/*app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath , 'index.html'));
});
*/

/*app.get('/', function(req, res){
    res.render('./frontend/src/index.js');
  });
*/


app.listen(port, () => { console.log('Server is running...') }); //Listen on port 5000
