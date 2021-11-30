const express = require('express')
const app     = express()
const PORT    = 3030
const { createUser, getUsers, createExercise, getLogs }    = require('./src/user.controller')
const bodyParser = require('body-parser')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', function(req, res) {
  res.send({ msg: 'Hello there' })
})
app
  .route('/api/users')
    .get(getUsers)
    .post(createUser)
app.route('/api/users/:id/exercises')
    .post(createExercise)
app.route('/api/users/:id/logs')
    .get(getLogs)

app.listen(PORT, console.log('Listening on ' + PORT))

