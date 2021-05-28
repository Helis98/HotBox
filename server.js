const express = require('express');
const mongoose = require('mongoose');
const boxRouter = require('./routes/boxRoutes.js');


const app = express();
app.use(express.json()); // Make sure it comes back as json

require('dotenv').config()
const uri = process.env.MONGO_URL

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(uri);

app.use(boxRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => { console.log('Server is running...') }); //Listen on port 3000
