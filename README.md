# auth

This is an express js vercel deployable authentication server.

## Usage

- user registration

```bash
curl -X POST https://pr4j3sh-auth/api/auth/register -H 'Content-Type: application/json' -d '{"username":"john", "password":"123456"}'
```

> return jwt token

- user login

```bash
curl -X POST https://pr4j3sh-auth/api/auth/login -H 'Content-Type: application/json' -d '{"username":"john", "password":"123456"}'
```

> return jwt token

- user profile

```bash
curl -X GET https://pr4j3sh-auth/api/auth/profile -H 'Authorization: Bearer <token>'
```

> return user details

## References

- [exhandlers Documentation](https://pr4j3sh.github.io/exhandlers/)
- [ExpressJs Documentation](https://expressjs.com/en/starter/hello-world.html)
- [Vercel Documentation](https://vercel.com/guides/using-express-with-vercel)
- [@pr4j3sh/frames](https://github.com/pr4j3sh/frames)
