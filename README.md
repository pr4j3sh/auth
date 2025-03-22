# auth

This is an express js railway deployed authentication server.

### API References

```bash
GET https://pr4j3sh-auth.up.railway.app/  # health check
POST https://pr4j3sh-auth.up.railway.app/api/auth/register  # user registration
POST https://pr4j3sh-auth.up.railway.app/api/auth/login  # user login
GET https://pr4j3sh-auth.up.railway.app/api/auth/profile  # user profile
```

## Usage

- user registration

```bash
curl -X POST https://pr4j3sh-auth.up.railway.app/api/auth/register -H 'Content-Type: application/json' -d '{"username":"john", "password":"123456"}'
```

> return jwt token

- user login

```bash
curl -X POST https://pr4j3sh-auth.up.railway.app/api/auth/login -H 'Content-Type: application/json' -d '{"username":"john", "password":"123456"}'
```

> return jwt token

- user profile

```bash
curl -X GET https://pr4j3sh-auth.up.railway.app/api/auth/profile -H 'Authorization: Bearer <token>'
```

> return user details

## References

- [exhandlers Documentation](https://pr4j3sh.github.io/exhandlers/)
- [ExpressJs Documentation](https://expressjs.com/en/starter/hello-world.html)
- [Railway Documentation](https://docs.railway.com/guides/express)
- [@pr4j3sh/frames](https://github.com/pr4j3sh/frames)
