const Exercise = require('./exercise.model')

class User {
  _log = []
  constructor (username) {
    this._id = users.getId()
    this.username = username
  }
  get log() {
    return this._log
  }
  set log(exercise) {
    this._log.push(exercise)
  }
  get exercise() {
    return this._exercise
  }
  get info() {
    return {
      _id: this._id,
      username: this.username,
      log: this.log,
      count: this.log.length,

    }
  }
  createExercise(options) {
    const exercise = new Exercise(options)
    this.log = exercise
    return exercise
  }
}

class Users {
  _list = []

  set list(user) { this._list.push(user) }

  get list() { return this._list }

  add(user) {
    this.list = user
  }

  find(id) {
    return this.list.filter(u => u._id == id)[0]
  }

  getId() {
    return this.list.length.toString()
  }
}

const users = new Users()

module.exports = { User, users }
