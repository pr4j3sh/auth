const { url } = require("./consts");

/**
 * Registers a new user with the given payload.
 *
 * @async
 * @function
 * @param {Object} payload - The registration details (e.g., username, password).
 * @returns {Promise<Object>} The response data from the server.
 *
 * @example
 * ```js
 * import auth from "@pr4j3sh/auth";
 *
 * const payload = {
 *   username: "johndoe",
 *   password: "securepassword123"
 * };
 *
 * const res = await auth.register(payload);
 * console.log(res);
 * ```
 */
async function register(payload) {
  const res = await fetch(url + "api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  return data;
}

/**
 * Logs in a user with the given credentials.
 *
 * @async
 * @function
 * @param {Object} payload - The login credentials (e.g., username, password).
 * @returns {Promise<Object>} The response data from the server.
 *
 * @example
 * ```js
 * import auth from "@pr4j3sh/auth";
 *
 * const payload = {
 *   username: "johndoe",
 *   password: "securepassword123"
 * };
 *
 * const res = await auth.login(payload);
 * console.log(res);
 * ```
 */
async function login(payload) {
  const res = await fetch(url + "api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  return data;
}

/**
 * Fetches the authenticated user's profile using the provided token.
 *
 * @async
 * @function
 * @param {string} token - The JWT access token for authentication.
 * @returns {Promise<Object>} The user's profile data.
 *
 * @example
 * ```js
 * import auth from "@pr4j3sh/auth";
 *
 * const token = "your_jwt_token_here";
 *
 * const res = await auth.profile(token);
 * console.log(res);
 * ```
 */
async function profile(token) {
  const res = await fetch(url + "api/auth/profile", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
}

/**
 * Fetches protected user secret for an authenticated user.
 *
 * @async
 * @function
 * @param {string} token - The JWT access token for authentication.
 * @returns {Promise<Object>} The user secret from the server.
 *
 * @example
 * ```js
 * import auth from "@pr4j3sh/auth";
 *
 * const token = "your_jwt_token_here";
 *
 * const res = await auth.secret(token);
 * console.log(res);
 * ```
 */
async function secret(token) {
  const res = await fetch(url + "api/auth/secret", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
}

module.exports = { register, login, profile, secret };
