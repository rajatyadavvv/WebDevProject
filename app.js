// IMPORTS
const express = require("express");
const path = require("path");
const connectDB = require("./config/db");

// INITIALIZE APP
const app = express();

// CONNECT MONGODB
connectDB();

//  MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Public folder (CSS, JS, images)
app.use(express.static(path.join(__dirname, "Public")));

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));


//  ROUTES (STATIC HTML)

// Landing page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "Public/static/index.html"));
});

app.get("/devices", (req, res) => {
    res.sendFile(path.join(__dirname, "Public/static/devices.html"));
});

app.get("/cyd", (req, res) => {
    res.sendFile(path.join(__dirname, "Public/static/cyd.html"));
});

app.get("/page2", (req, res) => {
    res.sendFile(path.join(__dirname, "Public/static/page2.html"));
});

app.get("/newdevice", (req, res) => {
    res.sendFile(path.join(__dirname, "Public/static/newdevice.html"));
});


//  NORMAL EJS ROUTES
app.get("/dashboard", (req, res) => {
    res.render("dashboard");
});

app.get("/analysis", (req, res) => {
    res.render("analysis");
});

// Settings page uses JSON data
app.get("/settings", (req, res) => {
  const data = require("./Public/data/settings.json");
  res.render("settings", {
    settings: data.profileFields,
    preferences: data.preferences,
    appSettings: data.appSettings
  });
});

// New Devices JSON
app.get("/newdevices", (req, res) => {
    const devices = require("./Public/data/newdevices.json");
    res.render("newdevices", { devices });
});


//  MONGODB CRUD ROUTES 
const reportRoutes = require("./routes/reportRoutes");
app.use("/reports", reportRoutes); 

//   START SERVER
app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
