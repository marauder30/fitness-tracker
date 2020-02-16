const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Please enter a workout type!"
    },
    name: {
        type: String,
        trim: true,
        required: "Please enter a workout name!"
    },
    duration: {
        type: Number
    },
    weight: {
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    },
    distance: {
        type: Number
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;