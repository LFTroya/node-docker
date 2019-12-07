const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const PORT = process.env.PORT;
const app = express();
const api = require('./api');

app.get('/', (req, res) => res.sendStatus(200));
app.get('/health', (req, res) => res.sendStatus(200));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('short'));
app.use(express.json());
app.use(helmet());

app.use(api);

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});