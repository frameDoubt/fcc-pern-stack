require('dotenv').config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const db = require("./db");

app.use(express.json());

// get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM restaurants");
        console.log(results);
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                restaurants: results["rows"],
            },
        });
    } catch(err) {
        console.log(err);
    }
});

// get a restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params);

    res.status(200).json({
        status: "success",
        data: {
            restaurant: "McDonalds"
        }
    });
});

// create a restaurant
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req.body);

    res.status(201).json({
        status: "success",
        data: {
            restaurant: "McDonalds"
        }
    });
});

// update restaurants
app.put("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);

    res.status(200).json({
        status: "success",
        data: {
            restaurant: "McDonalds"
        }
    });
});

// delete restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
    res.status(204).json({
        status: "success"
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`server is up and listening on port ${PORT}`);
});