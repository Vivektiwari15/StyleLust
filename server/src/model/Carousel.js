const mongoose = require('mongoose');

const carouselSchema = mongoose.Schema({
    carouselImg: {
        type: String,
        required: true
      }
})

const Carousel = mongoose.model("carousel",carouselSchema)

module.exports = Carousel