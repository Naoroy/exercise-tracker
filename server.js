const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const {
  createUser,
  getUsers,
  createExercise,
  getLogs
} = require('./src/controller')
const app = express()
const PORT = 3030

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.send({ msg: 'Hello there' }))
app.route('/api/users')
  .get(getUsers)
  .post(createUser)
app.route('/api/users/:_id/exercises')
  .post(createExercise)
app.route('/api/users/:_id/logs')
  .get(getLogs)

app.listen(PORT, console.log('Listening on ' + PORT))

