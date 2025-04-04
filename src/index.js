import express from "express";
import dotenv from "dotenv";
import publicConnection from "./configs/connectDB.js";
import connectDB from "./configs/connectDB.js";
import api from "./apis/index.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
//Kết nối DB
connectDB();
app.use(api);
// Lắng nghe port
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
