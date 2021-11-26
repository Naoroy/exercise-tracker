const userList = []

const User = function(options) {
  this._id = userList.length
  this.username = options.username
}

userList.push(new User({ username: 'nono', _id: 1 }))
userList.push(new User({ username: 'nana', _id: 2 }))

function createUser(req, res) {
  const username = req.body.username
  let newuser = new User({ username })
  userList.push(newuser)
  res.send(newuser)
}

function getUsers(req, res) {
  res.send(userList)
}


module.exports = { createUser, getUsers }
