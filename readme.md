#  AgriSense – Smart Soil Analysis Dashboard  
A full-stack web application built using **Node.js, Express, EJS, MongoDB, and Vanilla JavaScript**.  
Designed for soil-health monitoring with interactive dashboards, device pages, settings, and full CRUD operations.

---

##  Features

###  Frontend (HTML, CSS, JS)
- Fully responsive UI  
- Modern dashboard with stat cards and score bars  
- Interactive search and filter components  
- Dynamic pages powered by JSON  
- OOP (Object-Oriented JavaScript) used in dashboard page  
- Clean component-based structure using EJS partials (header/footer)

---

##  Backend (Node.js + Express)
- Organized routing using Express Router  
- EJS template engine for dynamic rendering  
- Static file serving for HTML/CSS/JS  
- Handles JSON data loading for:
  - Settings page  
  - Devices page  

---

##  Database (MongoDB + Mongoose)
Full **CRUD (Create, Read, Update, Delete)** module for **Reports**:

- Add new soil analysis reports  
- Edit existing reports  
- Delete reports  
- View all reports in a styled table  
- MongoDB schema using Mongoose  
- Clean route separation (`routes/reportRoutes.js`)  
- Clean model definition (`models/Report.js`)

---
```md

##  Project Structure

WebDevProject/
│
├── app.js
├── package.json
├── config/
│ └── db.js
│
├── models/
│ └── Report.js
│
├── routes/
│ └── reportRoutes.js
│
├── Public/
│ ├── css/
│ ├── js/
│ ├── data/
│ └── static/
│
└── Views/
├── partials/
│ ├── header.ejs
│ └── footer.ejs
│
├── dashboard.ejs
├── analysis.ejs
├── reports.ejs
├── settings.ejs
├── newdevices.ejs
├── addReport.ejs
└── editReport.ejs

```
---

##  Pages Overview

### Dashboard  
- Built using **OOP JS classes**  
- Dynamic statistical cards  
- Dynamic recent reports section  

### Devices  
- Loaded using devices.json  
- Cards generated dynamically via JavaScript  

### Settings  
- Form fields, language, timezone, and app settings loaded from settings.json  

### Reports  
- **Full CRUD with MongoDB**  
- Data rendered dynamically using EJS and Mongoose  

---

##  Installation & Running the Project

1. Clone the Repository

git clone <your-repo-link>
cd WebDevProject

2. Install Dependencies
npm install

3. Start MongoDB (macOS)
brew services start mongodb-community


OR manually:

mongod

4. Run the Server
npm start
Server runs at:
http://localhost:3000

Technologies Used:

    Node.js

    Express.js

    EJS Template Engine

    MongoDB / Mongoose

    HTML5

    CSS3

    Vanilla JavaScript

    JSON Data Rendering

Contributors :
Rajat Yadav
Piyush Yadav
Rohit Yadav