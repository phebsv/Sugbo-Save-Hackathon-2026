import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import FeatureCard from "../components/FeatureCard";
import {
  ChartIcon,
  HelpIcon,
  JeepIcon,
  LockIcon,
  LoginIcon,
  UserPlusIcon,
  WalletIcon,
} from "../components/AppIcons";

function Landing() {
  return (
    <main className="app-shell">
      <section className="landing-page">
        <header className="topbar">
          <Logo />

          <button className="icon-button" aria-label="Help">
            <HelpIcon size={17} />
          </button>
        </header>

        <section className="hero">
          <div className="hero-tile">
            <JeepIcon size={82} />
          </div>

          <h1>
            KITA <span>METER</span>
          </h1>

          <p>
            Track your jeepney income and know if you already profited.
          </p>
        </section>

        <section className="action-panel">
          <Link to="/driver/login" className="primary-action">
            <LoginIcon size={18} />
            <span>Driver Login</span>
          </Link>

          <Link to="/driver/register" className="secondary-action">
            <UserPlusIcon size={20} />
            <span>Driver Register</span>
          </Link>
        </section>

        <section className="features">
          <FeatureCard
            icon={<WalletIcon size={23} />}
            title="Barya Tracking"
            description="Log every fare as it comes in. No more mental math while driving."
            variant="red"
          />

          <FeatureCard
            icon={<ChartIcon size={23} />}
            title="Profit Metrics"
            description="Instantly see if you hit your boundary and fuel costs for the day."
            variant="yellow"
          />
        </section>

        <Link to="/admin/login" className="admin-link">
          <span>Admin Login</span>
          <LockIcon size={14} />
        </Link>

        <footer className="footer">
          <div>
            <span className="footer-mark">
              <Logo />
            </span>
            <strong>v2.4</strong>
          </div>
          <p>Built for the modern Cebuano jeepney fleet</p>
        </footer>
      </section>
    </main>
  );
}

export default Landing;