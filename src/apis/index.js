import express from "express";

const api = express.Router();
api.get("/", (req, res) => {
  res.send("Hello world");
});
api.get("/health-check", (req, res) => {
  res.send("Health-check");
});

export default api;
