export default function CircularProgressBar() {
  const r = 180;
  const circ = 2 * Math.PI * r;
  let progress = 0.25;
  return (
    <svg className="progress-bar" width="400" height="400">
      <circle
        cx="200"
        cy="200"
        r={r}
        stroke="#eee"
        fill="none"
        strokeWidth="10"
      />
      <circle
        cx="200"
        cy="200"
        r={r}
        stroke="var(--accent-color)"
        fill="none"
        strokeWidth="10"
        strokeDasharray={circ}
        strokeDashoffset={circ * progress} // progress = 0 to 1
        strokeLinecap="round"
        transform="rotate(-90 200 200)" // start from top
        style={{ transition: "stroke-dashoffset 0.5s linear" }}
      />
    </svg>
  );
}
