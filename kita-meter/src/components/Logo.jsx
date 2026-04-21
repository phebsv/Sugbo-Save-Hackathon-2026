import { GaugeIcon } from "./AppIcons";

function Logo() {
  return (
    <div className="logo">
      <span className="logo-icon">
        <GaugeIcon size={16} />
      </span>
      <span>KITA METER</span>
    </div>
  );
}

export default Logo;