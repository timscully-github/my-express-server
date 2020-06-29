//jshint esversion:6

// require express
const express = require("express");

// create const to use express
const app = express();

// express method to tell server what to do when it makes a get request (console log request to see info associated with request)
app.get("/", function(request, response) {
  // send a response back for the get request to the browser
  response.send("Hello");
});

// telling express to start a server (localhost:3000)
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
