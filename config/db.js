const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/agrisense", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected ");
  } catch (err) {
    console.error("MongoDB Error ", err);
    process.exit(1);
  }
}

module.exports = connectDB;
