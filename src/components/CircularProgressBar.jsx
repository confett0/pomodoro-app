export default function CircularProgressBar({ timerState }) {
  const { timeLeft, duration, status } = timerState;
  const CIRCLE_RADIUS = 180;
  const SVG_SIZE = 400;
  const CIRCLE_CENTER = SVG_SIZE / 2;
  const circ = 2 * Math.PI * CIRCLE_RADIUS;
  const progress = 1 - timeLeft / duration;

  return (
    <svg className="progress-bar" viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}>
      <circle
        cx={CIRCLE_CENTER}
        cy={CIRCLE_CENTER}
        r={CIRCLE_RADIUS}
        stroke="#eee"
        fill="none"
        strokeWidth="10"
      />
      <circle
        cx={CIRCLE_CENTER}
        cy={CIRCLE_CENTER}
        r={CIRCLE_RADIUS}
        stroke="var(--accent-color)"
        fill="none"
        strokeWidth="10"
        strokeDasharray={circ}
        strokeDashoffset={status === "completed" ? 0 : circ * progress} // progress = 0 to 1
        strokeLinecap="round"
        transform="rotate(-90 200 200)" // start from top
        style={{ transition: "stroke-dashoffset 1s linear" }}
      />
    </svg>
  );
}
