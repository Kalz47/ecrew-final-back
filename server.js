import express from "express";
require("dotenv").config();

const app = express();

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
