import { toast } from "react-toastify";
import { userStore } from "../lib/store";

export default function Dashboard() {
  const { user, secret, key, logout } = userStore();

  async function showSecret() {
    try {
      const { success, message } = await secret();
      if (!success) throw new Error(message);
    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <section>
      <b>Dashboard</b>
      <article className="card">
        <article className="card-body">
          <h6>{user?.username}</h6>
        </article>
      </article>
      <article>
        <article className="btns">
          <p>Secret</p>
          {!key && (
            <button className="icon" onClick={showSecret}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3s3-1.358 3-3s-1.359-3-3-3"
                />
                <path
                  fill="currentColor"
                  d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316l-.105-.316C21.927 11.617 19.633 5 12 5m0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5c-.504 1.158-2.578 5-7.926 5"
                />
              </svg>
            </button>
          )}
        </article>
        <pre>
          <code>{key ? key : "your_secret_key"}</code>
        </pre>
      </article>
      <article>
        <button className="danger" onClick={logout}>
          Logout
        </button>
      </article>
    </section>
  );
}
