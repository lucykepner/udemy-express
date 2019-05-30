//load the express package
let express = require('express');
//execute express and save it to a variable. 
let app = express();
let port = 4000;

//define first route in root
app.get("/", function(req, res) { //req = request, res = response
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
  let animal = req.params.animal.toLowerCase();
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
  let word = req.params.word;
  let num = Number(req.params.num);
  function phrase(word, n) {
    let finalWords = [];
    for(let i = 0; i < num; i++) {
      finalWords.push(word);
    }
    return finalWords.join(" ");
  }
  let final = phrase(word, num)
  res.send(`${final}`);
});

app.get("*", function(req, res) {
  res.send(`Sorry, page not found...What are you doing with your life?`);
})

//tell Express to listen for requests (start server) it won't work at all without this...
app.listen(port, () => console.log(`app.js listening on port ${port}`));

