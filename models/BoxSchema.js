const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const boxSchema = new mongoose.Schema({
    orderNumber: {
        type: Number,
    },

    Empty: {
        type: Boolean,
        default: false
    },

    BoxID: {
        type: String
    },

    BoxNumber: {
        type: Number
    },

    QRCode: {
        type: Buffer
    }

    
    
});

boxSchema.plugin(AutoIncrement, {inc_field: 'BoxNumber'});
const Box = mongoose.model("Box", boxSchema);
module.exports = Box;