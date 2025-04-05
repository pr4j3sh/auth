# Auth Server SDK

This is an authentication server software development kit.

## Usage

- Install using `npm`

```bash
npm i pr4j3sh/auth
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

- User Register

```js
const { register } = require("@pr4j3sh/auth");

register({
  username: "john",
  password: "123456",
})
  .then((res) => console.log(res))
  .catch((err) => console.error(err.message));
```

## Reference

- [Authentication Server](https://pr4j3sh-auth.up.railway.app/)
- [NodeJS Documentation](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [NPM Documentation](https://docs.npmjs.com/)
- [@pr4j3sh/frames](https://pr4j3sh.github.io/frames/)
