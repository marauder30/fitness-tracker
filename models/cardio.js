const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Please enter a type of workout!"
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
    distance: {
        type: Number,
        required: "Please enter a distance in miles!"
    }
});

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;