function FeatureCard({ icon, title, description, variant = "red" }) {
  return (
    <article className="feature-card">
      <div className={`feature-icon ${variant}`}>{icon}</div>

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default FeatureCard;