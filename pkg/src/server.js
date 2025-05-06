const jwt = require("jsonwebtoken");

/**
 * Server side middleware to authenticate requests using a JWT token.
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
 * const { authHandler } = require("@pr4j3sh/auth")
 *
 * app.get("/protected", authHandler, (req, res) => {
 *   res.json({ user: req.user });
 * });
 * ```
 */
const authHandler = async (req, res, next) => {
  try {
    const header = req.headers["authorization"];
    if (!header || !header.startsWith("Bearer ")) {
      return res.status(401).json({ message: "unauthorized" });
    }

    const token = header.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "unauthorized" });
    }

    const payload = jwt.decode(token);
    const secret = payload.secret;

    jwt.verify(token, secret, (err, payload) => {
      if (err) {
        return res.status(401).json({ message: "unauthorized" });
      }
      req.user = payload;
      next();
    });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

module.exports = { authHandler };
