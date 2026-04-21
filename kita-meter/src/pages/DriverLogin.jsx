import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import AuthTrustTile from "../components/AuthTrustTile";
import { LockIcon, GaugeIcon } from "../components/AppIcons";

function DriverLogin() {
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();

    // Temporary only.
    // Later this will connect to PHP + MySQL.
    navigate("/driver/dashboard");
  }

  return (
    <main className="app-shell">
      <section className="fleet-auth-page">
        <header className="fleet-auth-top">
          <Logo />
        </header>

        <section className="fleet-auth-panel">
          <div className="fleet-auth-banner">
            <div>
              <h1>
                Driver
                <br />
                Log In
              </h1>
              <p>Enter the network of Cebuano operators</p>
            </div>
          </div>

          <form className="fleet-auth-form" onSubmit={handleLogin}>
            <label>
              Phone Number
              <div className="phone-input-row">
                <span>+63</span>
                <input type="tel" placeholder="912 345 6789" required />
              </div>
            </label>

            <label>
              Password
              <input type="password" placeholder="••••••••" required />
            </label>

            <button type="submit" className="fleet-submit-btn">
              Login <span>→</span>
            </button>
          </form>

          <div className="fleet-auth-switch">
            <span>Not part of the fleet?</span>
            <Link to="/driver/register">Register here</Link>
          </div>
        </section>

        <section className="auth-trust-grid">
          <AuthTrustTile icon={<LockIcon size={16} />} title="Secured Data" />
          <AuthTrustTile icon={<GaugeIcon size={16} />} title="Fast Approval" />
        </section>
      </section>
    </main>
  );
}

export default DriverLogin;