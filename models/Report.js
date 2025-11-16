const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  reportId: { type: String, required: true },
  date: { type: String, required: true },
  location: { type: String, required: true },
  status: { type: String, enum: ["Completed", "Pending"], required: true },
});

module.exports = mongoose.model("Report", ReportSchema);
