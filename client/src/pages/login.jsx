import auth from "@pr4j3sh/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const values = {
    username: "",
    password: "",
  };

  const navigate = useNavigate();
  const [formData, setFormData] = useState(values);

  function onChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function onSubmit(e) {
    try {
      e.preventDefault();
      if (!formData.username || !formData.password)
        throw new Error("provide a username and a password");
      const res = await auth.login(formData);
      if (!res.success) throw new Error(res.message);
      setFormData(values);
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
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
