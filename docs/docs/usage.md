---
title: Usage
id: usage
slug: /usage
---

# Usage

## Client side

- User Registration

```js
import auth from "@pr4j3sh/auth";

const payload = {
  username: "johndoe",
  password: "securepassword123",
};

const res = await auth.register(payload);
console.log(res);
```

## Server side

```js
const { authHandler } = require("@pr4j3sh/auth");

app.get("/protected", authHandler, (req, res) => {
  res.json({ user: req.user });
});
```

> View More in API Reference
