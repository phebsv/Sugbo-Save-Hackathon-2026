function AuthTrustTile({ icon, title }) {
  return (
    <div className="auth-trust-tile">
      <div className="auth-trust-icon">{icon}</div>
      <span>{title}</span>
    </div>
  );
}

export default AuthTrustTile;