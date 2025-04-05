const { url } = require("./consts");

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

module.exports = { register, login };
