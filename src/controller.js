const { User, users } = require('./user.model')

let u = new User('TestUser')
users.add(u)
u.addExercise({
  "description": "Create routes on ExpressJS",
  "duration": 20,
  "date": "2021-11-02"
})
u.addExercise({
  "description": "Create routes on ExpressJS",
  "duration": 20,
  "date": "2021-11-06"
})
u.addExercise({
  "description": "Create routes on ExpressJS",
  "duration": 20,
  "date": "2021-11-15"
})
u.addExercise({
  "description": "Create routes on ExpressJS",
  "duration": 20,
  "date": "2021-12-01"
})

module.exports = {
  createUser(req, res) {
    const user = new User(req.body.username)

    users.add(user)
    res.send({
      _id: user._id,
      username: user.username
    })
  },

  getUsers(req, res) {
    res.send(users.list)
  },

  getLogs(req, res) {
    const user = users.find(req.params._id).info
    const log = user.log
    const { from, to, limit } = req.query
    let filteredLog

    if (from && to) {
      filteredLog = log.filter(({ date }) => {
        let unixDays = d => Math.round(d.getTime() / (1000 * 60 * 60 * 24))
        let dateUnix = unixDays(new Date(date))
        let fromUnix = unixDays(new Date(from))
        let toUnix = unixDays(new Date(to))

        return fromUnix <= dateUnix && dateUnix <= toUnix
      })
    }

    res.send({
      _id: user._id,
      username: user.username,
      count: user.count,
      log: filteredLog ? filteredLog.slice(0, limit) : log.slice(0, limit)
    })
  },

  createExercise(req, res) {
    const user = users.find(req.params._id)
    const exo = user.addExercise(req.body)

    res.send({
      description: exo.description,
      date: exo.date,
      duration: exo.duration,
      _id: user._id,
      username: user.username
    })
  }
}
