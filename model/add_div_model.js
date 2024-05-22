var mongoose = require('mongoose');

var firstschema = new mongoose.Schema({
    div:{

        type:String
    }
  
});

module.exports = mongoose.model("add_div",firstschema);