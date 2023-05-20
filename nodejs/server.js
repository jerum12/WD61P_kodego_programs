const express = require('express');
const cors = require('cors');
const applic = express();
const port = 1234;

applic.use(express.urlencoded({ extended: true }));
applic.use(express.json());
applic.use(cors());

let students = [
  { id: '1', name: 'John', email: 'john@example.com', section: 'WD61P', honor: 'top1' },
  { id: '2', name: 'Kervi', email: 'kervi@example.com', section: 'WD60P', honor: 'top1' },
  { id: '3', name: 'Andria', email: 'andria@example.com', section: 'WD62P', honor: 'top1' },
  { id: '4', name: 'Lea', email: 'lea@example.com', section: 'WD64P', honor: 'top1' },
  { id: '5', name: 'Nichol', email: 'nichol@example.com', section: 'WD61P', honor: 'top2' },
  { id: '6', name: 'Allen', email: 'allen@example.com', section: 'WD61P', honor: 'top3' },
  { id: '7', name: 'Fey', email: 'fey@example.com', section: 'WD59P', honor: 'top1' },
  { id: '8', name: 'Jireh', email: 'jireh@example.com', section: 'WD62P', honor: 'top2' },
  { id: '9', name: 'Ken', email: 'ken@example.com', section: 'WD10P', honor: 'top1' },
  { id: '10', name: 'Marwin', email: 'marwin@example.com', section: 'WD12P', honor: 'top1' },
  { id: '11', name: 'Rhette', email: 'rhete@example.com', section: 'WD12P', honor: 'top2' },
  { id: '12', name: 'Vina', email: 'vina@example.com', section: 'WD12P', honor: 'top3' },
  { id: '13', name: 'Ralph', email: 'ralph@example.com', section: 'WD15P', honor: 'top2' },
  { id: '14', name: 'John', email: 'johnpaul@example.com', section: 'WD15P', honor: 'top1' },
];

//MIDDLEWARE
applic.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
  res.header('Access-Control-Allow-Headers', 'Content-Type', 'Authorization', 'Basic');
  next();
});

applic.get('/students', (request, response) => {
  //call function to get data from database
  response.json({ code: 200, message: 'Successfully retrieved!', data: students });
});

applic.post('/students', (request, response) => {
  //validate
  let name = request.body.name;
  let email = request.body.email;
  let section = request.body.section;
  let honor = request.body.honor;

  let obj = { id: (students.length + 1).toString(), name, email, section, honor };

  students.push(obj);

  response.json({ code: 200, message: 'Successfully saved', data: students });
  //call function to save database
});

applic.put('/students', (request, response) => {
  //validate
  let name = request.body.name;
  let email = request.body.email;
  let section = request.body.section;
  let honor = request.body.honor;

  let obj = { id: (students.length + 1).toString(), name, email, section, honor };

  students.push(obj);

  response.json({ code: 200, message: 'Successfully saved', data: students });
  //call function to save database
});

applic.delete('/students', (request, response) => {
  //validate
  let id = request.body.id;

  students.splice(students.indexOf(id), 1);

  response.json({ code: 200, message: 'Successfully saved', data: students });
  //call function to save database
});

applic.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
