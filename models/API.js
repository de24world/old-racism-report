const mongoose = require("mongoose");

const apiSchema = mongoose.Schema({
  id: { type: Number, unpipe: 1 },
  offender: String,
  victim: String,
  time: { type: Date, default: Date.now },
  countryCode: String,
  city: String,
  evidence: String,
  level: Number,
});

const API = mongoose.model("API", apiSchema);

moduel.exports = { API };
