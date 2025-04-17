import { login } from "@pr4j3sh/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const values = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(values);

  function onChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function onSubmit(e) {
    e.preventDefault();
    console.log(formData);
    const res = await login(formData);
    console.log(res);
    setFormData(values);
  }

  return (
    <section>
      <article>
        <p className="font-semibold">Login</p>
        <p>Login to your account.</p>
      </article>
      <form method="post" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="your username"
          name="username"
          value={formData.username}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="your password"
          name="password"
          value={formData.password}
          onChange={onChange}
        />
        <button type="submit">Submit</button>
      </form>
      <article>
        <p>
          Don&apos;t have an account?{" "}
          <Link to="/register" className="link">
            Register
          </Link>{" "}
        </p>
      </article>
    </section>
  );
}
