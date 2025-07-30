const express = require('express');
const router = express.Router();
const Campaign = require('../models/Campaign');

// Create
router.post('/', async (req, res) => {
  const campaign = new Campaign(req.body);
  await campaign.save();
  res.status(201).send(campaign);
});

// Read all
router.get('/', async (req, res) => {
  const campaigns = await Campaign.find();
  res.send(campaigns);
});

// Update
router.put('/:id', async (req, res) => {
  const campaign = await Campaign.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(campaign);
});

// Delete
router.delete('/:id', async (req, res) => {
  await Campaign.findByIdAndDelete(req.params.id);
  res.send({ success: true });
});

module.exports = router; 