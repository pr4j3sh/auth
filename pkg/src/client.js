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
 * const payload = {
 *   username: "johndoe",
 *   password: "securepassword123"
 * };
 *
 * register(payload).then(response => {
 *   console.log(response);
 * });
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
 * const payload = {
 *   username: "johndoe",
 *   password: "securepassword123"
 * };
 *
 * login(payload).then(response => {
 *   console.log(response);
 * });
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
 * const token = "your_jwt_token_here";
 *
 * profile(token).then(user => {
 *   console.log(user);
 * });
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
 * const token = "your_jwt_token_here";
 *
 * secret(token).then(data => {
 *   console.log(data);
 * });
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
