import "./StatusCard.css";

export default function StatusCard({ title, value }) {
  return (
    <div className="status-card">
      <div className="status-title">{title}</div>
      <div className="status-value">{value}</div>
    </div>
  );
}