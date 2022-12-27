require('dotenv').config();

const express = require("express");

const app = express();


// get a restaurant
app.get("/api/v1/restaurants/:restaurantid", (req, res) => {
    console.log(req.params);
});

// create a restaurant
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req);
});

// get all restaurants
app.get("/api/v1/restaurants", (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            restaurant: ["McDonalds", "Wendy's"]
        }
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`server is up and listening on port ${PORT}`);
});