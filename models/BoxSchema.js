const mongoose = require('mongoose');

const boxSchema = new.mongoose.Schema({
    orderNumber: {
        type: Number,
        required: true,
        trim: true
    },

    Empty: {
        type: Boolean,
        required: true,
        trime: true
    }

    
});

const Box = mongoose.model("Box", boxSchema);
module.exports = Box;