class Exercise {

  constructor({ description, duration, date }) {
    this.description = description
    this.duration = Number(duration)
    this.date = date ?
        new Date(date).toDateString() : new Date().toDateString()
  }
}

module.exports = Exercise
