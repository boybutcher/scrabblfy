const express = require ('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use('/', express.static(__dirname))

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.post(`/`, (req, res) => {
  let accumulator = [];
  const lettersArray = req.body.query.split('');
  const dictionaryArray = fs.readFileSync('dictionary.txt').toString().split('\n');
  res.send(accumulator);
})

app.listen(3000, () => {
  console.log(`scrabblfy server is listening in on port 3000`)
})
