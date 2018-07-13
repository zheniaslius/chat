const express = require('express');
const routes = require('./routes/api/routes');
const bodyParser = require('body-parser');
const connection = require('./db/config');

const app = express();

app.use(bodyParser.json());
app.use(routes);

const server = app.listen(8000, () => console.log('Listening on port 3000'));