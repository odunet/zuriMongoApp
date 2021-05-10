const express = require('express');
const router = express.Router();
const {
  checkOneData,
  checkData,
  createNewData,
  updateData,
} = require('../controllers/utilityControllers');

//Create schema
const book = require('../models/book');

/*
 * ROUTES
 */

// Find all data in collection
router.get('/', checkData(book));

// Find data using ID in collection
router.get('/:id', checkOneData(book));

// Store new data in collection
router.post('/', createNewData(book));

// Update data in collection
router.patch('/:id', updateData(book));

module.exports = router;
