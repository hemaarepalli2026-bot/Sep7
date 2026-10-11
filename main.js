const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.json({
        code: 200,
        message: "Server Started & MongoDb Connected"
    });
});

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});