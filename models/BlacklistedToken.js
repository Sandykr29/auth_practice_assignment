const mongoose = require("mongoose");

const BlacklistedTokenSchema = new mongoose.Schema({
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: "1d" }, // Automatically remove after 1 day
});

module.exports = mongoose.model("BlacklistedToken", BlacklistedTokenSchema);
