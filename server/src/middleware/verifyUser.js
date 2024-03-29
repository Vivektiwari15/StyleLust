const jwt = require("jsonwebtoken");

const verifyUser = async (req, res, next) => {
    const token = req.header("authToken");
    if (!token) return res.status(404).json({ message: "Invalid Token", success: false })
    try {
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decode.data
    } catch (error) {
        return res.status(400).json({ message: "Invalid Token", success: false });
    }
    next();

};

module.exports = verifyUser;