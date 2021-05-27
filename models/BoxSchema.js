const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const boxSchema = new mongoose.Schema({
    orderNumber: {
        type: Number,
    },

    Empty: {
        type: Boolean,
        default: true
    },

    BoxID: {
        type: String
    },

    BoxNumber: {
        type: Number
    }

    
});

boxSchema.plugin(AutoIncrement, {inc_field: 'BoxNumber'});
const Box = mongoose.model("Box", boxSchema);
module.exports = Box;