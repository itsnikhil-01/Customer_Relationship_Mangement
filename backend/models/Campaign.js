const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  name: String,
  type: String,
  startDate: Date,
  endDate: Date,
  budget: Number,
  status: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Campaign', campaignSchema); 