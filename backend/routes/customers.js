const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

// Create customer
router.post('/', async (req, res) => {
  const customer = new Customer(req.body);
  await customer.save();
  res.status(201).send(customer);
});

// Get all customers
router.get('/', async (req, res) => {
  const customers = await Customer.find();
  res.send(customers);
});

// Update customer
router.put('/:id', async (req, res) => {
  const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(customer);
});

// Delete customer
router.delete('/:id', async (req, res) => {
  await Customer.findByIdAndDelete(req.params.id);
  res.send({ success: true });
});

module.exports = router; 