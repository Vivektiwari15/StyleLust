const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token = req.header("authToken");

  if (token) {
    try {
      jwt.verify(token, process.env.SECRET_KEY);
      return res.status(200).json({ success: true });
    } catch (error) {
      return next();
    }
  }
  next();
};

module.exports = verifyToken;
