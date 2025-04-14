const jwt = require("jsonwebtoken");

function authHandler(user) {
  return async (req, res, next) => {
    const header = req.headers["authorization"];
    if (!header || !header.startsWith("Bearer ")) {
      return res.status(401).json({ message: "unauthorized" });
    }

    const token = header.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "unauthorized" });
    }

    const payload = jwt.decode(token);
    const u = await user.findById(payload.userId);

    jwt.verify(token, u.secret, (err, payload) => {
      if (err) {
        return res.status(401).json({ message: "unauthorized" });
      }
      req.user = payload;
      next();
    });
  };
}

module.exports = { authHandler };
