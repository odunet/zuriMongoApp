const express = require('express');
const { connectDB } = require('./db');

//Get env variable
require('dotenv').config();
const { PORT } = process.env;

//Get routes
const bookRoutes = require('./routes/bookRoutes');
const testRoutes = require('./routes/taskRoute');

//initialize express
const app = express();

//intialize middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define router
let router = express.Router();

//Connect to DB
connectDB();

//Use routes
app.use('/api', bookRoutes);
app.use('/task', testRoutes);

app.listen(PORT, () => {
  `Listening on ${PORT}`;
});
