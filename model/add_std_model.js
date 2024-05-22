var mongoose = require('mongoose');

var firstschema = new mongoose.Schema({
    standard:{

        type:Number
    }
  
});

module.exports = mongoose.model("add_student",firstschema);