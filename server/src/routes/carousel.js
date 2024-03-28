const router = require("express").Router();
const carouselController = require("../controllers/carouselController");
const upload = require("../middleware/multerUpload");

router.post("/add", upload, carouselController.create);
router.post("/find-all", carouselController.find);
router.delete("/delete", carouselController.delete);

module.exports = router;
