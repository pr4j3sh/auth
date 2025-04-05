# auth

This is an express js railway deployed authentication server.

> Currently limited to `10 req/min/user`

### API References

```bash
GET https://pr4j3sh-auth.up.railway.app/  # health check
POST https://pr4j3sh-auth.up.railway.app/api/auth/register  # user registration
POST https://pr4j3sh-auth.up.railway.app/api/auth/login  # user login
GET https://pr4j3sh-auth.up.railway.app/api/auth/profile  # user profile
```

## Usage

### SDK

- Install using `npm`

```bash
npm i @pr4j3sh/auth
```

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

### Curl

- User registration

```bash
curl -X POST https://pr4j3sh-auth.up.railway.app/api/auth/register -H 'Content-Type: application/json' -d '{"username":"john", "password":"123456"}'
```

> returns JWT token

- User login

```bash
curl -X POST https://pr4j3sh-auth.up.railway.app/api/auth/login -H 'Content-Type: application/json' -d '{"username":"john", "password":"123456"}'
```

> returns JWT token

- User profile

```bash
curl -X GET https://pr4j3sh-auth.up.railway.app/api/auth/profile -H 'Authorization: Bearer <token>'
```

> returns user details

## References

- [exhandlers Documentation](https://pr4j3sh.github.io/exhandlers/)
- [ExpressJs Documentation](https://expressjs.com/en/starter/hello-world.html)
- [Railway Documentation](https://docs.railway.com/guides/express)
- [@pr4j3sh/frames](https://github.com/pr4j3sh/frames)
