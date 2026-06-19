const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const urlRoutes = require("./routes/urlRoutes");

dotenv.config();

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors({ origin: "http://localhost:5173", credentials: true }));


connectDB();

app.use("/", urlRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));