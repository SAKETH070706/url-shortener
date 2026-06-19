const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  longUrl: String,
  shortCode: String,
  clicks: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});


const Url = mongoose.model("Url", urlSchema);
module.exports = Url;
