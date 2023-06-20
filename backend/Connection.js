const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", false);
mongoose.set("strictPopulate", false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.uwfgnts.mongodb.net/?retryWrites=true&w=majority`,
      () => {
        console.log("connected to mongoDb atlas");
      }
    );
  } catch (e) {
    console.log(`Error:${e.message}`);
    process.exit();
  }
};

module.exports = connectDB;
