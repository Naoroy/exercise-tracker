const userList = []

const User = function(options) {
  this._id = options._id
  this.username = options.username
}

userList.push(new User({ username: 'nono', _id: 1 }))
userList.push(new User({ username: 'nana', _id: 2 }))

function createUser(req, res) {
  res.send('wesh')
}
function getUsers(req, res) {
  console.log(userList)
  res.send('wesh')
}


module.exports = { createUser, getUsers }
