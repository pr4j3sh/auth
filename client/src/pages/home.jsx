import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <article>
        <p className="font-semibold">Hey there,</p>
        <p>
          This is auth, authentication server. Create your account or login to
          services. Or, use our SDK to implement auth in your product.
        </p>
      </article>
      <article className="btns">
        <Link to="/register">
          <button>Get Started</button>
        </Link>
        <a href="https://pr4j3sh.github.io/auth" target="_blank">
          <button className="secondary">Documentation</button>
        </a>
      </article>
      <article>
        <p className="font-semibold">Read more</p>
        <ul>
          <li>
            <a className="link" href="https://vite.dev/guide/" target="_blank">
              Vite Documentation
            </a>
          </li>
          <li>
            <a className="link" href="https://react.dev/learn" target="_blank">
              React Documentation
            </a>
          </li>
          <li>
            <a
              className="link"
              href="https://reactrouter.com/en/main/start/tutorial"
              target="_blank"
            >
              React Router Documentation
            </a>
          </li>
          <li>
            <a
              className="link"
              href="https://tailwindcss.com/docs/utility-first"
              target="_blank"
            >
              Tailwind CSS Documentation
            </a>
          </li>
          <li>
            <a className="link" href="https://icones.js.org/" target="_blank">
              Icones
            </a>
          </li>
          <li>
            <a
              className="link"
              href="https://github.com/pr4j3sh/frames"
              target="_blank"
            >
              @pr4j3sh/frames
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
}
