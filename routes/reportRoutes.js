const express = require("express");
const router = express.Router();
const Report = require("../models/Report");

// READ — Load all reports
router.get("/", async (req, res) => {
  const reports = await Report.find();
  res.render("reports", { reports });
});

// CREATE — Show form
router.get("/add", (req, res) => {
  res.render("addReport");
});

// CREATE — Submit form
router.post("/add", async (req, res) => {
  await Report.create(req.body);
  res.redirect("/reports");
});

// UPDATE — Show edit form
router.get("/edit/:id", async (req, res) => {
  const report = await Report.findById(req.params.id);
  res.render("editReport", { report });
});

// UPDATE — Submit edit
router.post("/edit/:id", async (req, res) => {
  await Report.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/reports");
});

// DELETE
router.get("/delete/:id", async (req, res) => {
  await Report.findByIdAndDelete(req.params.id);
  res.redirect("/reports");
});

module.exports = router;
