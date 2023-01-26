const cors = require('cors');
const express = require('express');
const app = express();
const knex = require('knex')(require('../knexfile')[process.env.NODE_ENV || 'development']);

app.use(express.json())
    .use(cors())

app.use('/members', require('./crud/member'));
app.use('/items', require('./crud/item'));


app.get('/', (req, res) => {
    res.status(200).send('Got / 🙂');
});

// app.get('*', function (req, res) {
//     res.status(404).send(`404: You tried navigating to a path that doesn't exist...`);
//   });
//   app.post('*', function (req, res) {
//     res.status(404).send(`404: You tried posting to a path that doesn't exist...`);
//   });
//   app.patch('*', function (req, res) {
//     res.status(404).send(`404: You tried patching in a path that doesn't exist...`);
//   });
//   app.delete('*', function (req, res) {
//     res.status(404).send(`404: You tried deleting in a path that doesn't exist...`);
//   });

module.exports = app;