const User = require("../model/User");
const otpSender = require("../utils/mailSmtp");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class userController {
  signup = async (req, res) => {
    try {
      if (!req.body.username)
        return res
          .status(400)
          .json({ message: "please enter username", success: false });
      if (!req.body.email)
        return res
          .status(400)
          .json({ message: "please enter email", success: false });
      if (!req.body.password)
        return res
          .status(400)
          .json({ message: "please enter password", success: false });
      const isEmail = req.body.email.includes("@gmail.com");
      if (!isEmail)
        return res.status(400).json({
          message: "Invalid Email, we supprt @gmail.com",
          success: false,
        });

      const findUsername = await User.findOne({ username: req.body.username });
      if (findUsername != null)
        return res
          .status(409)
          .json({ message: "username already taken", success: false });

      const findUser = await User.findOne({ email: req.body.email });
      if (findUser != null)
        return res
          .status(409)
          .json({ message: "Already a user", success: false });

      const userdata = await User(req.body);
      const saveUser = await userdata.save();
      const setOtp = await otpSender(saveUser.email);
      await User.findByIdAndUpdate(saveUser._id, { $set: { otp: setOtp.otp } });
      const data = {
        data: {
          token: saveUser.id,
        },
      };
      const authToken = jwt.sign(data, process.env.SECRET_KEY);
      res.status(201).json({
        message: "registration successfull...!",
        success: true,
        authToken,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Server did not respond", success: false });
    }
  };

  login = async (req, res) => {
    try {
      if (!req.body.identifier)
        return res
          .status(400)
          .json({ message: "please enter username or email", success: false });
      if (!req.body.password)
        return res
          .status(400)
          .json({ message: "please enter password", success: false });
      const isEmail = req.body.identifier.includes("@gmail.com");

      if (isEmail) {
        const findUser = await User.findOne({ email: req.body.identifier });
        if (findUser == null)
          return res
            .status(409)
            .json({ message: "Invalid email or password", success: false });

        const isMatch = await bcrypt.compare(
          req.body.password,
          findUser.password
        );

        if (!isMatch)
          return res
            .status(409)
            .json({ message: "Invalid email or password", success: false });

        const data = {
          data: {
            token: findUser.id,
          },
        };
        const authToken = jwt.sign(data, process.env.SECRET_KEY);
        return res
          .status(200)
          .json({ message: "Login successful..", success: true, authToken });
      }

      const findUser = await User.findOne({ username: req.body.identifier });
      if (findUser == null)
        return res
          .status(409)
          .json({ message: "Invalid username or password", success: false });

      const isMatch = await bcrypt.compare(
        req.body.password,
        findUser.password
      );
      if (!isMatch)
        return res
          .status(409)
          .json({ message: "Invalid username or password", success: false });

      const data = {
        data: {
          token: findUser.id,
        },
      };
      const authToken = jwt.sign(data, process.env.SECRET_KEY);

      return res
        .status(200)
        .json({ message: "Login successful..", success: true, authToken });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server did not respond", success: false });
    }
  };

  verifyOtp = async (req, res) => {
    try {
      const token = req.header("authToken");
      const decode = jwt.verify(token, process.env.SECRET_KEY);
      const findUser = await User.findById(decode.data.token);
      if (!req.body.otp)
        return res
          .status(400)
          .json({ message: "Please enter otp", success: false });
      if (req.body.otp != findUser.otp)
        return res.status(400).json({ message: "Invalid otp", success: false });
      await User.findByIdAndUpdate(findUser.id, { $set: { verify: true } });
      res
        .status(200)
        .json({ message: "Verification successfull...!", success: true });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Server did not respond", success: false });
    }
  };

  forgotPassword = async (req, res) => {
    try {
      if (!req.body.identifier)
        return res
          .status(400)
          .json({ message: "please enter username or email", success: false });
      const isEmail = req.body.identifier.includes("@gmail.com");

      if (isEmail) {
        const findUser = await User.findOne({ email: req.body.identifier });
        if (findUser == null)
          return res
            .status(404)
            .json({ message: "User not found", success: false });

        const forgotPasswordOtp = await otpSender(findUser.email);

        await User.findByIdAndUpdate(findUser.id, {
          $set: { otp: forgotPasswordOtp.otp },
        });

        const data = {
          data: {
            token: findUser.id,
          },
        };
        const authToken = jwt.sign(data, process.env.SECRET_KEY);

        return res
          .status(200)
          .json({ message: "Email sent...!", success: true, authToken });
      }

      const findUser = await User.findOne({ username: req.body.identifier });
      if (findUser == null)
        return res
          .status(404)
          .json({ message: "User not found", success: false });

      const forgotPasswordOtp = await otpSender(findUser.email);

      await User.findByIdAndUpdate(findUser.id, {
        $set: { otp: forgotPasswordOtp.otp },
      });

      const data = {
        data: {
          token: findUser.id,
        },
      };
      const authToken = jwt.sign(data, process.env.SECRET_KEY);

      return res
        .status(200)
        .json({ message: "Email sent...!", success: true, authToken });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Server did not respond", success: false });
    }
  };

  forgotPasswordVerify = async (req, res) => {
    try {
      const token = req.header("ForgotPassword");
      const decode = jwt.verify(token, process.env.SECRET_KEY);
      const findUser = await User.findById(decode.data.token);
      if (!req.body.otp)
        return res
          .status(400)
          .json({ message: "Please enter otp", success: false });
      if (req.body.otp != findUser.otp)
        return res.status(400).json({ message: "Invalid otp", success: false });
      res
        .status(200)
        .json({ message: "Verification successfull...!", success: true });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Server did not respond", success: false });
    }
  };

  updatePassword = async (req, res) => {
    try {
      const token = req.header("authToken");
      const decode = jwt.verify(token, process.env.SECRET_KEY);
      const findUser = await User.findById(decode.data.token);

      if (!req.body.password)
        return res
          .status(400)
          .json({ message: "Please enter password", success: false });
      if (!req.body.retypePassword)
        return res
          .status(400)
          .json({ message: "Please enter re-type password", success: false });

      const hasCapital = /[A-Z]/.test(req.body.password);
      const hasNumber = /\d/.test(req.body.password);
      const hasSymbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\\/|=]/.test(
        req.body.password
      );
      if (!hasCapital || !hasNumber || !hasSymbols)
        return res
          .status(401)
          .json({
            message:
              "Password must have atleast one Capital letter,Number,Special characters",
            success: false,
          });

      if (req.body.password != req.body.retypePassword)
        return res
          .status(400)
          .json({ message: "Password does not match", success: false });

      const salt = await bcrypt.genSalt(12);
      const hasedpassword = await bcrypt.hash(req.body.password, salt);
      req.body.password = hasedpassword;

      await User.findByIdAndUpdate(findUser.id, {
        $set: { password: req.body.password },
      });
      res
        .status(200)
        .json({ message: "Password updated successfull...!", success: true });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Server did not respond", success: false });
    }
  };
}

module.exports = new userController();
