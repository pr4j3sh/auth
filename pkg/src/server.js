const { Schema, model } = require("mongoose");
const jwt = require("jsonwebtoken");
const { asyncHandler } = require("exhandlers");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    secret: {
      type: String,
    },
  },
  { timestamps: true },
);

const User = model("User", userSchema);

/**
 * Middleware to authenticate requests using a JWT token.
 *
 * Extracts the Bearer token from the Authorization header, decodes it to get the user ID,
 * retrieves the user's secret, and verifies the token. If valid, attaches the decoded payload
 * to `req.user` and calls `next()`. Responds with 401 if authentication fails.
 *
 * @async
 * @function
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Promise<void>}
 *
 * @example
 * ```js
 * app.get("/protected", authHandler, (req, res) => {
 *   res.json({ user: req.user });
 * });
 * ```
 */
const authHandler = asyncHandler(async (req, res, next) => {
  const header = req.headers["authorization"];
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ message: "unauthorized" });
  }

  const token = header.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "unauthorized" });
  }

  const payload = jwt.decode(token);
  const user = await User.findById(payload.userId);

  jwt.verify(token, user.secret, (err, payload) => {
    if (err) {
      return res.status(401).json({ message: "unauthorized" });
    }
    req.user = payload;
    next();
  });
});

module.exports = { authHandler };
