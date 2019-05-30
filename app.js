let express = require('express');
let app = express();
let port = 4000;

//define first route
app.get("/", function(req, res) { //req = request, res = response
  res.send("Hi there, welcome to my assignment!");
});

//app.get("/speak/:pig")

//tell Express to listen for requests (start server)
app.listen(port, () => console.log(`app.js listening on port ${port}`));

