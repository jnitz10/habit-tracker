const mongoose = require("mongoose")

const habitSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true
  },
  habitType: {
    type: String,
    default: "daily"
  },
  progress: {
    type: [String],
    default: []
  },
  quantity: {
    type: [Number]
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
})

const Habit = mongoose.model('Habit', habitSchema)

module.exports = Habit
