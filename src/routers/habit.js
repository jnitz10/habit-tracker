const express = require('express')
const router = new express.Router()
const Habit = require('../models/habit')
const timestamp = require('time-stamp')

// Create new habit
router.post('/habits', async (req, res) => {
  const habit = new Habit({
    ...req.body
  })

  try {
    await habit.save()
    res.status(201).send(habit)
  } catch (e) {
    res.status(400).send(e)
  }
})

// Update habit
router.patch('/habits/:id', async (req, res) => {
  const update = req.body.update
  console.log(update)
  const allowedUpdates = ['description', 'progress']

  if (!allowedUpdates.includes(update)) {
    return res.status(400).send({ error: 'invalid operation' })
  }


  try {
    const habit = await Habit.findOne({ _id: req.params.id })

    if (!habit) {
      return res.status(404).send()
    }

    if (update == "progress") {
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
router.get('/habits', async (req, res) => {
  Habit.find({}).then((habits) => {
    res.send(habits)
  }).catch((e) => {
    res.status(500)

  })

})

// delete habit
router.delete('/habits/:id', async (req, res) => {
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
