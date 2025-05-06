const {
  errorHandler,
  notFoundHandler,
  logHandler,
  asyncHandler,
  corsHandler,
  initLogger,
  transports,
  streamHandler,
  rateLimitHandler,
  tokenHandler,
  passwordHandler,
  mongoHandler,
  hashHandler,
} = require("exhandlers");
const express = require("express");
const crypto = require("node:crypto");
const { User } = require("./src/schema");

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;
const origins = process.env.ORIGINS;

const server = express();
const logger = initLogger("info", transports);

server.set("trust proxy", 1);
server.use(express.json());
server.use(corsHandler(origins));
server.use(logHandler("combined", { stream: streamHandler(logger) }));
server.use(
  rateLimitHandler({
    windowMs: 60 * 60 * 1000,
    limit: 10,
    message: {
      success: false,
      message: "Too many requests. Please try again later.",
    },
  }),
);

server.get(
  "/",
  asyncHandler(async (req, res) => {
    res.status(200).json({
      success: true,
      message: "auth server online",
      author: {
        name: "pr4j3sh",
        website: "https://pr4j3sh.github.io/pr4j3sh/",
      },
    });
  }),
);

server.get("/ip", (req, res) => res.send(req.ip));

server.post(
  "/api/auth/register",
  asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
      throw new Error("username and password are required");
    }

    const userExists = await User.findOne({ username });
    if (userExists) {
      throw new Error("user already exists");
    }

    const hash = await hashHandler(password);

    const secret = crypto
      .createHash("sha1")
      .update(`${username}${process.env.SECRET}${Date.now()}`)
      .digest("hex");

    const user = new User({
      username,
      password: hash,
      secret,
    });

    await user.save();

    const token = await tokenHandler(
      { id: user._id, username: user.username, secret: user.secret },
      user.secret,
    );

    res.status(201).json({
      success: true,
      message: "user registered",
      data: {
        token,
        user: {
          username,
        },
      },
    });
  }),
);

server.post(
  "/api/auth/login",
  asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
      throw new Error("username and password are required");
    }

    const user = await User.findOne({ username });
    if (!user) {
      throw new Error("user does not exist");
    }

    const passMatch = await passwordHandler(password, user.password);
    if (!passMatch) {
      throw new Error("wrong credentials");
    }

    const token = await tokenHandler(
      { id: user._id, username: user.username, secret: user.secret },
      user.secret,
    );

    res.status(200).json({
      success: true,
      message: "user logged in",
      data: {
        token,
        user: {
          username,
        },
      },
    });
  }),
);

server.use(notFoundHandler);
server.use(errorHandler);

server.listen(port, hostname, async () => {
  await mongoHandler(process.env.MONGODB_URI);
  logger.info(`server running @ http://${hostname}:${port}`);
});

module.exports = server;
