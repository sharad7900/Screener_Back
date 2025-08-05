const mongoose = require('mongoose');

const map_model = new mongoose.Schema({
    Code:{
        type: String,
        require: true
    },
    Name:{
        type:String,
        require: true
    },
    ScreenerID:{
        type:String,
        require: true
    }
})

const map = new mongoose.model("map",map_model);

module.exports = map;