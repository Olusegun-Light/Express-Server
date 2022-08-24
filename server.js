const express = require('express');

const app = express();

app.get("/", function(request, response){
  response.send("<h1>Hello!</h1>");
});

app.get("/contact", function(request, response){
  response.send("Contact me: light@gmail.com");
});

app.get("/about", function(request, response){
  response.send("Hello My Name is Light, x_yrs old.");
});

app.get("/hobbies", function(request, response){
  response.send("My hobbies are coding");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
