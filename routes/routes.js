const express = require('express');
const Task = require('../models/models');

const router = express.Router();

//get
router.get('/', (req, res) => {
  Task.find((err, docs) => {
    if (err) console.log(err);
    res.json(docs);
  });
});

//post
router.post('/', (req, res) => {
  const task = new Task(req.body);
  task.save((err, doc) => {
    if (err) console.log(err);
    res.json(doc);
  });
});

//put
router.put('/:id', (req, res) => {
  Task.findByIdAndUpdate(
    {
      _id: req.params.id,
    },
    req.body,
    {
      new: true,
    },
    (err, doc) => {
      if (err) console.log(err);
      res.json(doc);
    }
  );
});

//Delete
router.delete('/:id', (req, res) => {
  Task.findByIdAndDelete(req.params.id, (err, doc) => {
    if (err) console.log(err);
    res.json(doc);
  });
});
module.exports = router;
