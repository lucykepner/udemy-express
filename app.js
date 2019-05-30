let express = require('express');
let app = express();
let port = 4000;

//define first route
app.get("/", function(req, res) { //req = request, res = response
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
  let animal = req.params.animal;
  let sounds = {
    pig: "Oink.",
    cow: "Moo.",
    dog: "Woof Woof!",
    snek: "Hisssss Rattle Rattle!",
    turkey: "Gobble Gobble."
  }
  res.send(`The ${animal} says '${sounds[animal]}'`);
});

app.get("/repeat/:word/:num", function(req, res) {
  let w = req.params.word;
  let n = req.params.num;
  function phrase(w, n) {
    let finalWords = [];
    for(let i = 0; i < n; i++) {
      finalWords.push(w);
    }
    return finalWords.join(" ");
  }
  let final = phrase(w, n)
  res.send(`${final}`);
});

app.get("*", function(req, res) {
  res.send(`Sorry, page not found...What are you doing with your life?`);
})

//tell Express to listen for requests (start server)
app.listen(port, () => console.log(`app.js listening on port ${port}`));

