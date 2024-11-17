const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1212", // Replace with your MySQL password
  database: "fueltypedata", // Replace with your database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  }
  console.log("Connected to the MySQL database");
});

// API Route to Add Vehicle Data
app.post("/add-vehicle", (req, res) => {
  const { model_year, fuel_type, fuel_economy, mileage } = req.body;

  const query = `
        INSERT INTO vehicle_data (model_year, fuel_type, fuel_economy, mileage)
        VALUES (?, ?, ?, ?)
    `;

  db.query(
    query,
    [model_year, fuel_type, fuel_economy, mileage],
    (err, result) => {
      if (err) {
        console.error("Error inserting vehicle data:", err);
        res.status(500).json({ error: "Failed to add vehicle data" });
      } else {
        res
          .status(201)
          .json({ message: "Vehicle data added successfully", result });
      }
    }
  );
});

// API Route to Get All Vehicle Data
app.get("/get-vehicles", (req, res) => {
  const query = "SELECT * FROM vehicle_data";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching vehicle data:", err);
      res.status(500).json({ error: "Failed to fetch vehicle data" });
    } else {
      res.status(200).json({ vehicles: results });
    }
  });
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
