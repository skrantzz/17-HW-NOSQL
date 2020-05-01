const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// {
//     day: new Date().setDate(new Date().getDate()-10),
//     exercises: [
//       {
//         type: "resistance",
//         name: "Bicep Curl",
//         duration: 20,
//         weight: 100,
//         reps: 10,
//         sets: 4
//       }
//     ]
//   },

var workoutSchema = new Schema({
    day: { type: Date, default: Date.now, required: true },
    exercises: [{
        name: { type: String, required: "Enter workout name" },
        type: { type: String, required: "Enter workout type" },
        duration: Number,
        Weight: Number,
        Reps: Number,
        Sets: Number,
        Distance: Number
   
    }]
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;