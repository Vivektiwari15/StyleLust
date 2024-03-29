const jwt = require("jsonwebtoken");

const adminVerify = async (req, res, next) => {
  const token = req.header("spAdmintoken");

  if (token) {
    try {
      const decode = jwt.verify(token, process.env.SECRET_KEY);
      if(decode.data.isSuperAdmin) return res.status(200).json({ success: true ,isSuperAdmin:true,admin:true});
      return res.status(200).json({ success: true ,isSuperAdmin:false,admin:true});
    } catch (error) {
      return next();
    }
  }
  next();
};

module.exports = adminVerify;