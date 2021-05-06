const express = require('express');
const mongoose = require('mongoose');


const app = express();
app.use(express.json()); // Make sure it comes back as json


mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://admin:prdqn1yLOCv3QsCf@hotboxcluster.e47sf.mongodb.net/HotBoxDB?retryWrites=true&w=majority');

app.listen(3000, () => { console.log('Server is running...') }); //Listen on port 3000
