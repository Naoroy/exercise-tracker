const { User, users } = require('./user.model')
const userList = []


function createUser(req, res) {
  const user = new User(req.body.username)
  users.add(user)
  res.send({
    _id: user.info._id,
    username: user.info.username
  })
}

function getUsers(req, res) {
  res.send(users.list)
}

function createExercise(req, res) {
  const user = users.find(req.params.id)
  const exo = user.createExercise(req.body)
  exo.id = user._id
  exo.username = user.username
  res.send(exo)
}

function getLogs(req, res) {
  const user = users.find(req.params.id)
  res.send(user.info)
}


module.exports = { createUser, getUsers, getLogs, createExercise }
