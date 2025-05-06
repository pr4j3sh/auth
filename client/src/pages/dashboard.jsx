import { userStore } from "../lib/store";

export default function Dashboard() {
  const { user, logout } = userStore();

  return (
    <section>
      <b>Dashboard</b>
      <article className="card">
        <article className="card-body">
          <h6>{user?.username}</h6>
        </article>
      </article>
      <article>
        <button className="danger" onClick={logout}>
          Logout
        </button>
      </article>
    </section>
  );
}
