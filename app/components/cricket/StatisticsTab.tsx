import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";
import { runRateData, runsPerOver, wagonWheelShots, partnerships, liveMatch } from "~/data/cricket-data";

// ─── Run Rate Graph ───────────────────────────────────────────────────────────

function RunRateGraph() {
  return (
    <div className="rounded-xl border border-[#1F2F44] overflow-hidden" style={{ background: "#111827" }}>
      <div className="px-4 py-3 border-b border-[#1F2F44]">
        <h3 className="text-white font-bold font-score">Run Rate Chart</h3>
        <p className="text-[#9CA3AF] text-xs mt-0.5">Current Run Rate vs Required Run Rate</p>
      </div>
      <div className="p-4">
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={runRateData} margin={{ top: 5, right: 10, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1F2F44" />
            <XAxis
              dataKey="over"
              stroke="#9CA3AF"
              tick={{ fill: "#9CA3AF", fontSize: 11 }}
              label={{ value: "Overs", position: "insideBottomRight", fill: "#9CA3AF", fontSize: 11 }}
            />
            <YAxis
              stroke="#9CA3AF"
              tick={{ fill: "#9CA3AF", fontSize: 11 }}
              domain={[4, 8]}
            />
            <Tooltip
              contentStyle={{ background: "#111827", border: "1px solid #1F2F44", borderRadius: "8px" }}
              labelStyle={{ color: "#9CA3AF", fontSize: 11 }}
              itemStyle={{ fontSize: 12 }}
            />
            <Legend wrapperStyle={{ fontSize: 12, color: "#9CA3AF" }} />
            <Line
              type="monotone"
              dataKey="crr"
              stroke="#10B981"
              strokeWidth={2.5}
              dot={false}
              name="CRR"
              activeDot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="rrr"
              stroke="#EF4444"
              strokeWidth={2.5}
              dot={false}
              strokeDasharray="5 5"
              name="RRR"
              activeDot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// ─── Manhattan Chart ──────────────────────────────────────────────────────────

function ManhattanChart() {
  return (
    <div className="rounded-xl border border-[#1F2F44] overflow-hidden" style={{ background: "#111827" }}>
      <div className="px-4 py-3 border-b border-[#1F2F44]">
        <h3 className="text-white font-bold font-score">Runs Per Over</h3>
        <p className="text-[#9CA3AF] text-xs mt-0.5">India — 2nd Innings</p>
      </div>
      <div className="p-4">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={runsPerOver} margin={{ top: 5, right: 10, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1F2F44" vertical={false} />
            <XAxis
              dataKey="over"
              stroke="#9CA3AF"
              tick={{ fill: "#9CA3AF", fontSize: 10 }}
              interval={4}
            />
            <YAxis stroke="#9CA3AF" tick={{ fill: "#9CA3AF", fontSize: 10 }} />
            <Tooltip
              contentStyle={{ background: "#111827", border: "1px solid #1F2F44", borderRadius: "8px" }}
              labelStyle={{ color: "#9CA3AF", fontSize: 11 }}
              itemStyle={{ fontSize: 12 }}
              formatter={(val) => [`${val} runs`, "Runs"]}
            />
            <Bar
              dataKey="runs"
              fill="#3B82F6"
              radius={[2, 2, 0, 0]}
              name="Runs"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// ─── Wagon Wheel ─────────────────────────────────────────────────────────────

function WagonWheel({ show }: { show: boolean }) {
  if (!show) return null;

  const cx = 150;
  const cy = 150;
  const r = 120;

  const toXY = (angleDeg: number, dist: number) => {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return {
      x: cx + (dist / 100) * r * Math.cos(rad),
      y: cy + (dist / 100) * r * Math.sin(rad),
    };
  };

  const shotColor = (runs: number) => {
    if (runs === 6) return "#10B981";
    if (runs === 4) return "#F59E0B";
    if (runs >= 1) return "#60A5FA";
    return "#374151";
  };

  return (
    <div className="rounded-xl border border-[#1F2F44] overflow-hidden" style={{ background: "#111827" }}>
      <div className="px-4 py-3 border-b border-[#1F2F44]">
        <h3 className="text-white font-bold font-score">Wagon Wheel</h3>
        <p className="text-[#9CA3AF] text-xs mt-0.5">Virat Kohli &amp; Shreyas Iyer — Combined</p>
      </div>
      <div className="p-4 flex flex-col items-center">
        <svg width="300" height="300" viewBox="0 0 300 300" className="max-w-full">
          {/* Ground */}
          <circle cx={cx} cy={cy} r={r} fill="rgba(29,185,84,0.04)" stroke="#1F2F44" strokeWidth="1.5" />
          <circle cx={cx} cy={cy} r={r * 0.6} fill="none" stroke="#1F2F44" strokeWidth="0.75" strokeDasharray="4 6" />
          <circle cx={cx} cy={cy} r={r * 0.3} fill="rgba(29,185,84,0.08)" stroke="#1F2F44" strokeWidth="0.75" />
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#2D4A2D" strokeWidth="2" />

          {/* Stumps */}
          {[-3, 0, 3].map((o) => (
            <line key={o} x1={cx + o} y1={cy - 12} x2={cx + o} y2={cy + 12} stroke="#F59E0B" strokeWidth="1.5" />
          ))}
          <line x1={cx - 5} y1={cy - 12} x2={cx + 5} y2={cy - 12} stroke="#F59E0B" strokeWidth="1" />
          <line x1={cx - 5} y1={cy + 12} x2={cx + 5} y2={cy + 12} stroke="#F59E0B" strokeWidth="1" />

          {/* Shot lines */}
          {wagonWheelShots.map((shot, i) => {
            const end = toXY(shot.angle, shot.distance);
            const color = shotColor(shot.runs);
            return (
              <g key={i}>
                <line x1={cx} y1={cy} x2={end.x} y2={end.y} stroke={color} strokeWidth={shot.runs >= 4 ? 2 : 1} strokeOpacity={shot.runs === 0 ? 0.4 : 0.85} />
                <circle cx={end.x} cy={end.y} r={shot.runs >= 4 ? 5 : 3} fill={color} opacity={shot.runs === 0 ? 0.4 : 1} />
              </g>
            );
          })}

          {/* Labels */}
          <text x={cx} y={cy - r - 6} fill="#6B7280" fontSize="9" textAnchor="middle">STRAIGHT</text>
          <text x={cx + r + 6} y={cy + 4} fill="#6B7280" fontSize="9">OFF</text>
          <text x={cx - r - 6} y={cy + 4} fill="#6B7280" fontSize="9" textAnchor="end">LEG</text>
        </svg>

        <div className="flex gap-4 text-xs mt-2">
          {[{ label: "Six", color: "#10B981" }, { label: "Four", color: "#F59E0B" }, { label: "Runs", color: "#60A5FA" }, { label: "Dot", color: "#374151" }].map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: item.color }} />
              <span className="text-[#9CA3AF]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Partnerships ─────────────────────────────────────────────────────────────

function PartnershipsPanel() {
  return (
    <div className="rounded-xl border border-[#1F2F44] overflow-hidden" style={{ background: "#111827" }}>
      <div className="px-4 py-3 border-b border-[#1F2F44]">
        <h3 className="text-white font-bold font-score">Partnerships</h3>
      </div>
      <div className="p-4 space-y-3">
        {partnerships.map((p) => {
          const maxRuns = Math.max(...partnerships.map((x) => x.runs));
          const pct = (p.runs / maxRuns) * 100;
          return (
            <div key={p.wicket}>
              <div className="flex items-center justify-between mb-1 text-xs">
                <span className="text-[#9CA3AF]">{p.batter1} & {p.batter2}</span>
                <span className="text-white font-bold">{p.runs} ({p.balls}b)</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: "#1F2F44" }}>
                <div
                  className="h-full rounded-full"
                  style={{ width: `${pct}%`, background: "linear-gradient(90deg, #3B82F6, #60A5FA)" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Main Export ─────────────────────────────────────────────────────────────

interface StatisticsTabProps {
  showWagonWheel?: boolean;
}

export function StatisticsTab({ showWagonWheel = true }: StatisticsTabProps) {
  return (
    <div className="space-y-4">
      <RunRateGraph />
      <ManhattanChart />
      <WagonWheel show={showWagonWheel} />
      <PartnershipsPanel />
    </div>
  );
}
