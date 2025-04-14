const { register, login, profile, secret } = require("./src/client");
const { authHandler } = require("./src/server");

module.exports = {
  register,
  login,
  profile,
  secret,
  authHandler,
};
