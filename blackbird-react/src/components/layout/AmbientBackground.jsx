export default function AmbientBackground({ orbCount = 3 }) {
  return (
    <div className="ambient-bg">
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      {orbCount >= 3 && <div className="gradient-orb orb-3"></div>}
    </div>
  );
}
