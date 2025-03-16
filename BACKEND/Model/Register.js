const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const regiSchema = new Schema({

    name: {
        type:String,//dataType
        required:true,//validation
    },
    
    gmail: {
        type:String,//dataType
        required:true,//validation
    },

    password: {
        type:String,//dataType
        required:true,//validation
    }
});

module.exports = mongoose.model(
    "Register", //file name
    regiSchema //function name
)