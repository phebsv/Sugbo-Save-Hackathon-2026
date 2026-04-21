import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import AuthTrustTile from "../components/AuthTrustTile";
import { LockIcon, GaugeIcon } from "../components/AppIcons";

function DriverRegister() {
  const navigate = useNavigate();

  function handleRegister(event) {
    event.preventDefault();

    // Temporary only.
    // Later this will connect to PHP + MySQL.
    navigate("/driver/login");
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
                Register
              </h1>
              <p>Join the network of Cebuano operators</p>
            </div>
          </div>

          <form className="fleet-auth-form" onSubmit={handleRegister}>
            <label>
              Full Name
              <input type="text" placeholder="Juan Dela Cruz" required />
            </label>

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

            <label>
              Confirm Password
              <input type="password" placeholder="••••••••" required />
            </label>

            <label className="terms-row">
              <input type="checkbox" required />
              <span>
                I agree to fleet <strong>terms of service</strong> and
                industrial safety protocols.
              </span>
            </label>

            <button type="submit" className="fleet-submit-btn">
              Register <span>→</span>
            </button>
          </form>

          <div className="fleet-auth-switch">
            <span>Already part of the fleet?</span>
            <Link to="/driver/login">Login here</Link>
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

export default DriverRegister;