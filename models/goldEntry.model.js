// models/goldEntry.model.js

const mongoose = require('mongoose');

const goldEntrySchema = new mongoose.Schema({
    datetime: { type: String, required: true },
    name: { type: String, required: true },
    customerId: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    interest: { type: Number, default: 12 },
    phoneNumber: { type: String, required: true },
    sonOf: { type: String },
    particulars: { type: String },
    weightGram: { type: Number, required: true },
    weightMiliGram: { type: Number, required: true }
});

module.exports = mongoose.model('GoldEntry', goldEntrySchema);