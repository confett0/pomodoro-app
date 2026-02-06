export default function CircularProgressBar({ timeLeft, totalTime }) {
  const r = 180;
  const circ = 2 * Math.PI * r;
  let progress = 1 - timeLeft / totalTime;
  return (
    <svg className="progress-bar" viewBox="0 0 400 400">
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
        style={{ transition: "stroke-dashoffset 1s linear" }}
      />
    </svg>
  );
}
