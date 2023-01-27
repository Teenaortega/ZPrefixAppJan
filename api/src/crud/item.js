const express = require('express');
const app = express();
const knex = require('knex')(require('../../knexfile')[process.env.NODE_ENV || 'development']);

app.get('/', (req, res) => { // List All Items All Data
    knex('item')
      .select('*')
      .then(items => {
        res.set("Access-Control-Allow-Origin", "*").status(200).send(items);
      });
  });
  
  app.get('/merged', (req, res) => { // List All Items With Merged Data from member Table
    knex('item')
      .join('member', 'member.id', 'item.member_id')
      .select('item.id', 'member_id', 'member.first_name', 'member.last_name', 'member.username', 'item.name','item.description', 'item.quantity')
      .then(items => {
        res.set("Access-Control-Allow-Origin", "*").status(200).send(items);
      });
  });
  
  app.get('/member/:id', (req, res) => { // List All Items for member by ID
    let { id } = req.params;
    knex('item')
      .select('*')
      .where('member_id', id)
      .then(items => {
        res.set("Access-Control-Allow-Origin", "*").status(200).send(items);
      });
  });
  
  app.post('/', async (req, res) => { // Add an Item
    let num = (await knex('item').max('id as max').first()).max + 1;
    knex('item')
      .insert(
        {
          id: num,
          member_id: req.body.member_id,
          name: req.body.name,
          description: req.body.description,
          quantity: req.body.quantity
        }
      )
      .then(res.set("Access-Control-Allow-Origin", "*").status(201).end())
  });
  
  app.get('/:id', (req, res) => { // Get Item by ID All Data
    let { id } = req.params;
    knex('item')
      .where('id', id)
      .then(item => {
        res.set("Access-Control-Allow-Origin", "*").status(200).send(item);
      });
  });
  

  app.patch('/:id', (req, res) => { // Update Item
    let { id } = req.params;
    knex('item')
      .where('id', id)
      .update({
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity
      })
      .then(item => {
        res.set("Access-Control-Allow-Origin", "*").status(200).end();
      }).catch(e => {
        res.set("Access-Control-Allow-Origin", "*").status(500).end();
      });
  });
  
  app.delete('/:id', (req, res) => { // Delete Item
    let { id } = req.params;
    knex('item')
      .where('id', id)
      .del()
      .then(item => {
        res.set("Access-Control-Allow-Origin", "*").status(410).end();
      });
  });

  module.exports = app;
  