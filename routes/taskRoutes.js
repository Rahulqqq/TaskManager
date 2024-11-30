const express = require('express');
const Task = require('../models/Task');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

// Create a task
router.post('/', authMiddleware, async (req, res) => {
    try {
        const task = new Task({ ...req.body, user: req.user.id });
        await task.save();
        res.json(task);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Get all tasks for a user
router.get('/', authMiddleware, async (req, res) => {
    try {
        console.log("request ", req.user);
        const tasks = await Task.find({ user: req.user.id });
        console.log(tasks);
        res.json(tasks);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Update a task
router.put('/:id', authMiddleware, async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log(task);
        res.json(task);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Delete a task
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Task deleted' });
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Retrieves a single task
router.get('/:id', authMiddleware, async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      console.info(task)
      if (!task) return res.status(404).json({ msg: 'Task not found' });
      if (task.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'Unauthorized' });
      }
      res.json(task);
    } catch (err) {
      res.status(500).send('Server Error');
    }
  });
  

module.exports = router;
