const mongoose = require("mongoose");


const NAV = new mongoose.Schema({
  data: { type: Map, of: Number },
  time: { type: String },

},{strict:false});

const NAV_Data = new mongoose.model("screener",NAV);

module.exports = NAV_Data;