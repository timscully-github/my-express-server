//jshint esversion:6

// require express
const express = require("express");

// create const to use express
const app = express();

// telling express to start a server (localhost:3000)
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
