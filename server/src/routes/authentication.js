const router = require("express").Router();
const hashpassword = require("../middleware/hashPassword");
const verifyToken = require("../middleware/tokenVerfication");
const userController = require("../controllers/userController");

router.post("/signup", hashpassword, userController.signup);
router.post("/login", verifyToken, userController.login);
router.post("/verify", userController.verifyOtp);
router.post("/forgot-password", userController.forgotPassword);
router.post("/forgot-password/verify", userController.forgotPassword);
router.post("/update-password", userController.updatePassword);

module.exports = router;
