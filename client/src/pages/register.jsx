import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userStore } from "../lib/store";

export default function Register() {
  const values = {
    username: "",
    password: "",
  };

  const navigate = useNavigate();
  const { register } = userStore();
  const [formData, setFormData] = useState(values);

  function onChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function onSubmit(e) {
    try {
      e.preventDefault();
      if (!formData.username || !formData.password)
        throw new Error("provide a username and a password");
      const { success, message } = await register(formData);
      if (!success) throw new Error(message);
      setFormData(values);
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
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
