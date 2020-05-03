const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var workoutSchema = new Schema({
    day: { type: Date, default: Date.now, required: true },
    exercises: [{
        name: { type: String, required: "Enter workout name" },
        type: { type: String, required: "Enter workout type" },
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number
   
    }]
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;