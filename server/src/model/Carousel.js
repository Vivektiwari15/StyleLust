const mongoose = require('mongoose');

const carouselSchema = mongoose.Schema({
    carouselImage: {
        type: String,
        required: true
      }
})

const Carousel = mongoose.model("carousel",carouselSchema)

module.exports = Carousel