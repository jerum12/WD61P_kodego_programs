const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 1234;

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/animation.html');
});

//get data from database and send it back to server
app.get('/about', (req, res) => {
  res.send('About');
});

app.post('/submit', (request, response) => {
  //validate
  //save data to database
  //return successful kapag nasave ng maayos

  try {
    const { name, message, address } = request.body;

    if (name === '') {
      let obj = { code: 500, message: 'Name is mandatory!' };
      response.send(JSON.stringify(obj));
    }

    //call function to save data to database

    let obj = { code: 200, message: 'Successfuly saved!' };
    response.send(JSON.stringify(obj));
  } catch (error) {
    console.log('error', error);
    let obj = { code: 500, message: 'Insert failed!' };
    response.send(JSON.stringify(obj));
  }
});

app.post('/register', (req, res) => {
  const { name, message } = req.body;
  let obj = { name, message, single: 'Yes' };
  res.send(JSON.stringify(obj));
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
