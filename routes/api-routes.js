const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts", ({ body }, res) => {
  Workout.find({})
    .sort({ day: 1 })
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// put
// router.put

// post

// get

module.exports = router;
