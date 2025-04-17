import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const values = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(values);

  function onChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setFormData(values);
  }

  return (
    <section>
      <article>
        <p className="font-semibold">Register</p>
        <p>Create your account.</p>
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
          Already have an account?{" "}
          <Link to="/login" className="link">
            Login
          </Link>{" "}
        </p>
      </article>
    </section>
  );
}
