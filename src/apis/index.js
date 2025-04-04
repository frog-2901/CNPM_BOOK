import express from "express";
import auth_api from "./auth/auth.js";

const api = express.Router();
api.use("/users", auth_api);
api.get("/", (req, res) => {
  res.send("Hello world");
});
api.get("/health-check", (req, res) => {
  res.send("Health-check");
});

export default api;
