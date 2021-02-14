const express = require("express");
const data = require("./quotes.json");
// import express from "express";
// import data from "./quotes.json";
const path = require("path");

const server = express();

server.set("views", path.join(__dirname, "views"));
server.set("view engine", "hbs");

server.use(express.static("public"));
server.use("/random-quote", (req, res) => {
  const { topic, quote } = data[Math.round(Math.random() * data.length)];
  return res.json({ topic, quote });
});

server.use("/", (req, res) => {
  return res.render("index");
});

server.listen(4000, () => {
  console.log("Server is listening...");
});
