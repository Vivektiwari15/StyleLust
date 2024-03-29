const Carousel = require("../model/Carousel");

class carouselController {
  create = async (req, res) => {
    try {
      if (!req.file)
        return res
          .status(400)
          .json({ message: "Please select image", success: false });
      const carouselImage = await Carousel({
        carouselImg: req.file.filename
      });
      const saveCarousel = carouselImage.save();
      res
        .status(200)
        .json({ message: "Image added to carousel", success: true });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Server did not respond", success: false });
    }
  };
  find = async (req, res) => {
    try {
      const carouselImage = await Carousel.find().sort({_id:-1});
      res.status(200).json({ Images: carouselImage });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Server did not respond", success: false });
    }
  };
  delete = async (req, res) => {
    try {
      console.log(req.body.id)
      const carouselImage = await Carousel.findByIdAndDelete(req.body.id,{new:true});
      res.status(200).json({ message:"Image Deleted",success: true });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Server did not respond", success: false });
    }
  };
}

module.exports = new carouselController();
