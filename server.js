
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to my server!");
});


app.get("/about", (req, res) => {
  res.status(200).json({
    name: "Pandiri Jashwannth Reddy",
    section: "CSE-GENAI-2B"
  });
});


app.get("/time", (req, res) => {
  res.status(200).send(new Date().toString());
});


app.use((req, res) => {
  res.status(404).send("404 - Page not found");
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
