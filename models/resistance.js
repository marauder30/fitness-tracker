const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
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
        type: Number,
        required: "Please enter a duration in minutes!"
    },
    weight: {
        type: Number,
        required: "Please enter the weight of resistance!"
    },
    reps: {
        type: Number,
        required: "Please enter the amount of repetitions!"
    },
    sets: {
        type: Number,
        required: "Please enter the number of sets!"
    }
});

const Resistance = mongoose.model("Resistance", resistanceSchema);

module.exports = Resistance;