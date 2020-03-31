const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const db = require('./database/queries');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
