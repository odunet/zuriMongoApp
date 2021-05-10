const express = require('express');
const router = express.Router();
const {
  checkOneData,
  checkData,
  createNewData,
  updateData,
} = require('../controllers/utilityControllers');

//Create schema
const task = require('../models/task');

/*
 * ROUTES
 */
// Find all data in collection
router.get('/', checkData(task));

// Find data using ID in collection
router.get('/:id', checkOneData(task));

// Store new data in collection
router.post('/', createNewData(task));

// Update data in collection
router.patch('/:id', updateData(task));

module.exports = router;
