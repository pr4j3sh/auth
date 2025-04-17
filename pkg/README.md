# auth

`auth` is an authentication server, that allows users to register, login, access profile and build their own backend system without worrying about user authentication.

> limited to `10 req/min/user`

## Documentation

[View Documentation](https://pr4j3sh.github.io/auth/)

## Installation

- Install [@pr4j3sh/auth](https://www.npmjs.com/package/@pr4j3sh/auth)

```bash
npm i @pr4j3sh/auth
```

## Usage

### SDK

#### Client side

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

#### Server side

```js
const { authHandler } = require("@pr4j3sh/auth");

app.get("/protected", authHandler, (req, res) => {
  res.json({ user: req.user });
});
```

### Curl

- User registration

```bash
curl -X POST https://pr4j3sh-auth.up.railway.app/api/auth/register -H 'Content-Type: application/json' -d '{"username":"john", "password":"123456"}'
```

> returns JWT token

## References

- [exhandlers Documentation](https://pr4j3sh.github.io/exhandlers/)
- [ExpressJs Documentation](https://expressjs.com/en/starter/hello-world.html)
- [Railway Documentation](https://docs.railway.com/guides/express)
- [@pr4j3sh/frames](https://github.com/pr4j3sh/frames)
