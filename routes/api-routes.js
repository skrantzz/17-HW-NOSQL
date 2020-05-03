const router = require("express").Router();
const Workout = require("../models/workout");


    
router.get("/api/workouts", (req, res) => {
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
router.put("/api/workouts/:id", ({params, body}, res) => {
    Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } }, { new: true, runValidators: true })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

// post

router.post("/api/workouts", ({ body }, res) => {
    Workout.create({ day: new Date() })
      .then((workouts) => {
        res.json(workouts);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
// get
router.get("/api/workouts/range", (req, res) => {
    Workout.find().limit(7)
      .then((workouts) => {
        res.json(workouts);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

module.exports = router;
