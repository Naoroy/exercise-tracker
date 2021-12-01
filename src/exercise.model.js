class Exercise {
  constructor({description, duration, date}) {
    this.description = description
    this.duration = Number(duration)
    this.date = new Date(date).toDateString()
  }
}

module.exports = Exercise
