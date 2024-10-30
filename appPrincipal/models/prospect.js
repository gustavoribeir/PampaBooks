const mongoose = require('mongoose');

const prospectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  message: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Prospect', prospectSchema);