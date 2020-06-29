//jshint esversion:6

// require express
const express = require("express");

// create const to use express
const app = express();

// express method to tell server what to do when it makes a get request (console log request to see info associated with request)
app.get("/", function(req, res) {
  // send a response back for the get request to the browser
  res.send("<h1>Hello world!</h1>");
});

// create additional pages
app.get("/contact", function(req, res) {
  res.send("<h3>Email me at: hello@timscully.co.uk</h3>");
});

// telling express to start a server (localhost:3000)
// (use nodemon to update server without re-started)
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
