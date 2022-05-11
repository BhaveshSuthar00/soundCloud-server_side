require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) return reject(err);
      resolve(user);
    });
  });
};
const authenticate = async (req, res, next) => {
  let user;
  try {
    user = await verifyToken(token);
    // console.log(user);
  } catch (error) {
    return res.status(500).send({ message: "Authorization token invalid" });
  }
  //   console.log(user)
  req.user = user.user;
  //   console.log(req.user);

  //   console.log('user:', req.user);
  return next();
};

module.exports = { authenticate, verifyToken };
