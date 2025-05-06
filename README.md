# pr4j3sh/auth

`pr4j3sh/auth` is an authentication service that enables user registration, login. With our SDKs, developers can easily integrate authentication into their own applications.

> limited to `10 req/min/user`

## Documentation

[Website](https://pr4j3sh-auth.vercel.app/) | [Documentation](https://pr4j3sh.github.io/auth/)

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
