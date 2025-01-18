const mongoose = require("mongoose");
require('dotenv').config();

const mongoURI = "mongodb+srv:mongodb.net/";

const connectToMongo = async () => {
  try {
    await mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB Connected..."))
  } catch (error) {
   console.log("Error connecting to Mongo DB")
  }
};

module.exports = connectToMongo;
