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
