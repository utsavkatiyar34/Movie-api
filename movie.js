const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: String,
    overview: String,
    release_date: Date,
    vote_average:Number,
    vote_count:Number
}, {
    timestamps: true
})

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;