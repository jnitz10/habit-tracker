const express = require('express')
const router = new express.Router()
const Habit = require('../models/habit')
const timestamp = require('time-stamp')
const auth = require('../middleware/auth')

// Create new habit
router.post('/habits', auth, async (req, res) => {
  const habit = new Habit({
    ...req.body,
    owner: req.user._id
  })

  try {
    await habit.save()
    res.status(201).send(habit)
  } catch (e) {
    res.status(400).send(e)
  }
})

// Update habit
router.patch('/habits/:id', auth, async (req, res) => {
  const update = req.body.update
  const allowedUpdates = ['description', 'progress']

  if (!allowedUpdates.includes(update)) {
    return res.status(400).send({ error: 'invalid operation' })
  }


  try {
    const habit = await Habit.findOne({ _id: req.params.id, owner: req.user._id })

    if (!habit) {
      return res.status(404).send()
    }

    if (update === "progress") {
      habit.progress.push(timestamp())
      console.log(habit.progress)
    }

    await habit.save()

    res.send(habit)
  } catch (e) {
    res.status(400).send()
  }
})

// get multiple habits
router.get('/habits', auth, async (req, res) => {
  Habit.find({ owner: req.user._id }).then((habits) => {
    res.send(habits)
  }).catch((e) => {
    res.status(500)

  })

})

// delete habit
router.delete('/habits/:id', auth, async (req, res) => {
  try {
    //const task = await Task.findByIdAndDelete(req.params.id)
    const habit = await Habit.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

    if (!habit) {
      return res.status(404).send()
    }

    res.send(habit)
  } catch (e) {
    res.status(500).send()
  }
})


module.exports = router
