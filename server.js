const express = require('express');
const mongoose = require('mongoose');


const app = express();
app.use(express.json()); // Make sure it comes back as json

require('dotenv').config()
const uri = process.env.MONGO_URL

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(uri);

app.listen(3000, () => { console.log('Server is running...') }); //Listen on port 3000
