const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');
const { hash, compare } = bcrypt;
const SALTS = 12;
const knex = require('knex')(require('../../knexfile')[process.env.NODE_ENV || 'development']);


app.get('/', (req, res) => {
  knex('member')
    .select('*')
    .orderBy('id', 'asc')
    .then(items => {
      res.status(200).send(items);
    })
    .catch(e => res.status(500).end())
  // http://localhost:8080/member
});

// GET All Incident Reports from incident_reports table by ID
app.get('/:id', (req, res) => {
  let { id } = req.params;
  knex('member')
    .where('id', id)
    .then(items => {
      res.status(200).send(items);
    }).catch(e => res.status(500).end())
  // http://localhost:8080/member/1
});

// POST username and password for check against user table password_hash, 200 = match, 403 = wrong, 500 = server issue
app.post('/login', async (req, res) => {
  try {
    let { username, password } = req.body;
    const hashed = await knex('member').where('username', username).select('*');
    const match = await compare(password, hashed[0].password_hash);
    match ? res.status(200).send(hashed[0]) : res.status(403).end()
  } catch (e) { res.status(500).send(e) }
  // http://localhost:8080/member/login
});

// POST New Account >>>> TODO Validate + Connect
app.post('/new', async (req, res) => {
  let num = (await knex('member').max('id as max').first()).max + 1;
  let hashed = await hash(req.body.password, SALTS);
  knex('member')
    .insert(
      {
        id: num,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        username: req.body.username,
        password_hash: hashed,
        admin: false,
      }
    )
    .then(res.status(201).end())
    .catch((e) => res.status(500).end())
  // http://localhost:8080/member/new
});

//PATCH update member information
app.patch('/updatemember/:id', async (req, res) => {

  try {
    let hashed = await hash(req.body.password, SALTS)
    knex('member')
      .where('id', req.params.id)
      .update(
        {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            username: req.body.username,
            password_hash: hashed,
            admin: false,
        }
      )
      .then(data =>
        res.status(204).end()
      ).catch(e => res.status(403).end());
  }
  catch (e) { res.status(500).send(e); }
  // http://localhost:8080/member/updatemember/1
});

app.patch('/updatecert/:id', async (req, res) => {
  try {
    knex('member')
      .where('id', req.params.id)
      .update(
        {
          admin: req.body.admin,
        }
      )
      .then(data =>
        res.status(204).end()
      ).catch(e => res.status(403).end());
  }
  catch (e) { res.status(500).send(e); }
  // http://localhost:8080/member/updatecert/1
});


// PATCH update member to admin
app.patch('/admin/:id', async (req, res) => {
  try {
    await knex('member').where('id', req.params.id).update({ admin: true }).then(data =>
      res.status(200).end()
    ).catch(e => res.status(403).end());
  } catch (e) { res.status(500).end(); }
  // http://localhost:8080/member/admin/1
})

// PATCH update member to not admin
app.patch('/unadmin/:id', async (req, res) => {
  try {
    await knex('member').where('id', req.params.id).update({ admin: false }).then(data =>
      res.status(200).end()
    ).catch(e => res.status(403).end());
  } catch (e) { res.status(500).end(); }
  // http://localhost:8080/member/unadmin/1
})
module.exports = app;