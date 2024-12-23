// routes/goldEntries.js

const express = require('express');
const router = express.Router();
const GoldEntry = require('../models/goldEntry.model');

// Create a new entry
router.post('/', async (req, res) => {
    const entry = new GoldEntry(req.body);
    try {
        const savedEntry = await entry.save();
        res.status(201).json(savedEntry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all entries
router.get('/', async (req, res) => {
    try {
        const entries = await GoldEntry.find();
        res.json(entries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete an entry by ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEntry = await GoldEntry.findByIdAndDelete(id);

        if (!deletedEntry) {
            return res.status(404).json({ message: 'Entry not found' });
        }

        res.status(200).json({ message: 'Entry deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
