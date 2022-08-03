const mongoose = require("mongoose")

const baseOptions = {
  discriminatorKey: 'habitType',
}

const habitSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
}, baseOptions)

const Habit = mongoose.model('Habit', habitSchema)

const DefaultHabit = Habit.discriminator('Default', new mongoose.Schema({
  progress: { type: [String], default: [] }
}))

const XPerDay = Habit.discriminator('xPerDay', new mongoose.Schema({
  progress: { type: mongoose.Schema.Types.Mixed, default: {} }

}))



module.exports = {
  DefaultHabit,
  XPerDay,
  Habit
}
