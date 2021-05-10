const mongoose = require('mongoose');
require('dotenv').config();
const { DB_URL } = process.env;

//Create connection (async)
const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log('MongoDB connected');

    //Seed data
  } catch (err) {
    console.error(`Line 50: ${err.message}`);

    //Exit
    process.exit(1);
  }
};

//Add new data (async)
const createData = async (collection, data) => {
  try {
    let response = await collection.create({
      id: data.id,
      title: data.title,
      author: data.author,
      description: data.description,
      category: data.category,
      purchaseCount: data.purchaseCount,
      tags: data.tags,
    });

    return response;
  } catch (err) {
    return `Line 42: ${err}`;

    //Exit
    process.exit(1);
  }
};

// //Find all data (async)
const findData = async (collection, query = {}) => {
  try {
    let data = await collection.find(query);
    return data;
  } catch (err) {
    return `Line 56: ${err}`;

    //Exit
    process.exit(1);
  }
};

//Find one data (async)
const findOneData = async (collection, query = {}) => {
  try {
    let data = await collection.find({ id: query });
    return data;
  } catch (err) {
    return `Line 70: ${err}`;

    //Exit
    process.exit(1);
  }
};

//Find one and update data (async)
const findAndUpdate = async (collection, query = {}, newEntry = {}) => {
  try {
    // let data = await collection.findOneAndUpdate({ id: parseInt(query) }, newEntry);   Returns original data
    let data = await collection.updateOne({ id: parseInt(query) }, newEntry);
    return data;
  } catch (err) {
    return `Line 85: ${err}`;

    //Exit
    process.exit(1);
  }
};

module.exports = {
  connectDB,
  createData,
  findData,
  findOneData,
  findAndUpdate,
};
