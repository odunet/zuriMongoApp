const { createData, findData, findOneData, findAndUpdate } = require('../db');

// Get all or slected data based on query keys
const checkData = (book) => async (req, res) => {
  try {
    if (`${JSON.stringify(req.query)}` === '{}') {
      let response = await findData(book);
      res.status(200).json(response);
    } else {
      let response = await findData(book, req.query);
      res.status(200).json(response);
    }
  } catch (e) {
    console.log(`Line 47: ${e}`);
  }
};

// Get one data by ID
const checkOneData = (book) => async (req, res) => {
  try {
    let response = await findOneData(book, parseInt(req.params.id));
    res.status(200).json(response);
  } catch (e) {
    console.log(`Line 57: ${e}`);
  }
};

// Create new data
const createNewData = (book) => async (req, res) => {
  //Get lenght of collection
  let temp = await findData(book);
  req.body['id'] = temp.length + 1;

  try {
    let response = await createData(book, req.body);
    res.status(200).json(response);
  } catch (e) {
    console.log(`Line 81: ${e}`);
  }
};

// Update selected data
const updateData = (book) => async (req, res) => {
  try {
    let response = await findAndUpdate(book, req.params.id, req.body);
    res.status(200).json(response);
  } catch (e) {
    console.log(`Line 81: ${e}`);
  }
};

module.exports = { checkData, checkOneData, createNewData, updateData };
