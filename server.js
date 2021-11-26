const express = require('express')
const app     = express()
const PORT    = 3030
const { createUser, getUsers }    = require('./src/user.controller')
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

app.listen(PORT, console.log('Listening on ' + PORT))

