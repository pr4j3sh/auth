---
title: Usage
id: usage
slug: /usage
---

# Usage

- User Registration

```js
const { register } = require("@pr4j3sh/auth");

register({
  username: "john",
  password: "123456",
})
  .then((res) => console.log(res))
  .catch((err) => console.error(err.message));
```

- User Login

```js
const { login } = require("@pr4j3sh/auth");

login({
  username: "john",
  password: "123456",
})
  .then((res) => console.log(res))
  .catch((err) => console.error(err.message));
```

- User Profile

```js
const { profile } = require("@pr4j3sh/auth");

profile("jndj24r09jfinrufixj2")
  .then((res) => console.log(res))
  .catch((err) => console.error(err.message));
```

> View More in API Reference
