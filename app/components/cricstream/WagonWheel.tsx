import type { WagonWheelShot } from "~/lib/cricket-data";

interface WagonWheelProps {
  shots: WagonWheelShot[];
  batterName: string;
}

const FIELD_POSITIONS = [
  { label: "SL", angle: 330, distance: 0.85 },
  { label: "3rd man", angle: 300, distance: 0.88 },
  { label: "Cover", angle: 45, distance: 0.82 },
  { label: "Mid-off", angle: 20, distance: 0.75 },
  { label: "Mid-on", angle: 160, distance: 0.75 },
  { label: "Square leg", angle: 210, distance: 0.8 },
  { label: "Fine leg", angle: 240, distance: 0.85 },
  { label: "Deep square", angle: 180, distance: 0.92 },
  { label: "Mid-wicket", angle: 195, distance: 0.78 },
];

const SHOT_COLORS = {
  FOUR: "#1DB954",
  SIX: "#F5A623",
  RUNS: "#60A5FA",
  DOT: "#374151",
};

export function WagonWheel({ shots, batterName }: WagonWheelProps) {
  const cx = 150;
  const cy = 150;
  const r = 130;

  const toCartesian = (angleDeg: number, dist: number) => {
    const angleRad = ((angleDeg - 90) * Math.PI) / 180;
    return {
      x: cx + r * dist * Math.cos(angleRad),
      y: cy + r * dist * Math.sin(angleRad),
    };
  };

  return (
    <div
      className="rounded-xl p-4"
      style={{ background: "#0F1629", border: "1px solid #1E2A45" }}
    >
      <div className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-semibold">
        Wagon Wheel — {batterName}
      </div>

      <div className="flex justify-center">
        <svg width="300" height="300" viewBox="0 0 300 300" className="max-w-full">
          {/* Ground circles */}
          <circle cx={cx} cy={cy} r={r} fill="rgba(29,185,84,0.04)" stroke="#1E2A45" strokeWidth="1" />
          <circle cx={cx} cy={cy} r={r * 0.65} fill="none" stroke="#1E2A45" strokeWidth="0.5" strokeDasharray="4,6" />
          <circle cx={cx} cy={cy} r={r * 0.35} fill="rgba(29,185,84,0.08)" stroke="#1E2A45" strokeWidth="0.5" />

          {/* Crease/pitch */}
          <rect
            x={cx - 6}
            y={cy - 35}
            width={12}
            height={70}
            rx={3}
            fill="rgba(255,255,255,0.06)"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.5"
          />

          {/* Field boundary */}
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#2D4A2D" strokeWidth="2" />

          {/* Shot lines */}
          {shots.map((shot, i) => {
            const end = toCartesian(shot.angle, shot.distance);
            const color = SHOT_COLORS[shot.type];
            const isHighValue = shot.type === "SIX" || shot.type === "FOUR";
            return (
              <g key={i}>
                <line
                  x1={cx}
                  y1={cy}
                  x2={end.x}
                  y2={end.y}
                  stroke={color}
                  strokeWidth={isHighValue ? 2 : 1}
                  strokeOpacity={shot.type === "DOT" ? 0.4 : 0.8}
                />
                <circle
                  cx={end.x}
                  cy={end.y}
                  r={isHighValue ? 5 : 3}
                  fill={color}
                  opacity={shot.type === "DOT" ? 0.4 : 1}
                />
                {isHighValue && (
                  <text
                    x={end.x + (end.x > cx ? 6 : -6)}
                    y={end.y + 4}
                    fill={color}
                    fontSize="9"
                    fontWeight="bold"
                    textAnchor={end.x > cx ? "start" : "end"}
                  >
                    {shot.runs}
                  </text>
                )}
              </g>
            );
          })}

          {/* Stumps at center */}
          <g>
            {[-3, 0, 3].map((offset) => (
              <line
                key={offset}
                x1={cx + offset}
                y1={cy - 10}
                x2={cx + offset}
                y2={cy + 10}
                stroke="#F5A623"
                strokeWidth="1.5"
              />
            ))}
            <line x1={cx - 5} y1={cy - 10} x2={cx + 5} y2={cy - 10} stroke="#F5A623" strokeWidth="1" />
            <line x1={cx - 5} y1={cy + 10} x2={cx + 5} y2={cy + 10} stroke="#F5A623" strokeWidth="1" />
          </g>

          {/* Labels */}
          <text x={cx} y={cy - r - 8} fill="#6B7280" fontSize="9" textAnchor="middle">STRAIGHT</text>
          <text x={cx + r + 8} y={cy + 4} fill="#6B7280" fontSize="9">OFF</text>
          <text x={cx - r - 8} y={cy + 4} fill="#6B7280" fontSize="9" textAnchor="end">LEG</text>
        </svg>
      </div>

      {/* Legend */}
      <div className="flex gap-4 justify-center mt-2 text-xs">
        {Object.entries(SHOT_COLORS).map(([type, color]) => (
          <div key={type} className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
            <span className="text-gray-400">{type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
