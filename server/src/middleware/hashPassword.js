const bcrypt = require("bcrypt");

const hashpassword = async (req, res, next) => {
  try {
    if (req.body.password) {
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
      const salt = await bcrypt.genSalt(12);
      const hasedpassword = await bcrypt.hash(req.body.password, salt);
      req.body.password = hasedpassword;
      next();
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json({ message: "Server did not respond", success: false });
    next();
  }
};

module.exports = hashpassword;
