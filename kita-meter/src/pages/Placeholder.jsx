import { Link } from "react-router-dom";
import Logo from "../components/Logo";

function Placeholder({ title }) {
  return (
    <main className="app-shell">
      <section className="placeholder-page">
        <Logo />

        <div className="placeholder-card">
          <h1>{title}</h1>
          <p>This screen will be built next.</p>

          <Link to="/" className="primary-action">
            Back to Landing
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Placeholder;