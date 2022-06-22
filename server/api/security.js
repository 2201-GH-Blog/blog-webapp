const User = require("../db/models/User");

const verifyAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log(token, "THIS IS THE TOKEN IN THE SECURITY MIDDLEWARE")
    const user = await User.findByToken(token);
    console.log("THIS IS USER IN THE SECURITY MIDDLEWARE", user)
    req.user = user;
    if (!req.user.isAdmin) {
      return res.status(403).send("Permission denied");
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
    if (!req.user.id) {
      return res.status(401).send("Unauthorized");
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  verifyAdmin,
  verifyToken,
};
