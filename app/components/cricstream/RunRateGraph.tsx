import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Line,
  ComposedChart,
} from "recharts";
import type { OverData } from "~/lib/cricket-data";

interface RunRateGraphProps {
  data: OverData[];
  target?: number;
  teamName: string;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="rounded-lg px-3 py-2"
        style={{ background: "#0F1629", border: "1px solid #1E2A45" }}
      >
        <p className="text-gray-400 text-xs mb-1">Over {label}</p>
        {payload.map((p: any) => (
          <p key={p.name} className="text-xs font-bold" style={{ color: p.color }}>
            {p.name}: {p.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function RunRateGraph({ data, target, teamName }: RunRateGraphProps) {
  return (
    <div
      className="rounded-xl p-4"
      style={{ background: "#0F1629", border: "1px solid #1E2A45" }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Run Rate Graph</div>
          <div className="text-white font-bold text-sm">{teamName}</div>
        </div>
        {target && (
          <div
            className="px-2 py-1 rounded text-xs font-bold"
            style={{ background: "rgba(245,166,35,0.15)", color: "#F5A623" }}
          >
            Target: {target}
          </div>
        )}
      </div>

      <ResponsiveContainer width="100%" height={180}>
        <ComposedChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1E2A45" />
          <XAxis
            dataKey="over"
            tick={{ fill: "#6B7280", fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#6B7280", fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          {target && (
            <ReferenceLine
              y={target}
              stroke="#F5A623"
              strokeDasharray="6 4"
              strokeWidth={1.5}
              label={{ value: `Target ${target}`, fill: "#F5A623", fontSize: 10 }}
            />
          )}
          <defs>
            <linearGradient id="runGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1DB954" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#1DB954" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="cumulative"
            stroke="#1DB954"
            strokeWidth={2}
            fill="url(#runGrad)"
            name="Score"
            dot={false}
            activeDot={{ r: 4, fill: "#1DB954" }}
          />
          <Line
            type="monotone"
            dataKey="runs"
            stroke="#60A5FA"
            strokeWidth={1.5}
            dot={false}
            name="Runs/Over"
          />
        </ComposedChart>
      </ResponsiveContainer>

      <div className="flex gap-4 mt-2 text-xs justify-center">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-0.5 rounded" style={{ background: "#1DB954" }} />
          <span className="text-gray-400">Cumulative Score</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-0.5 rounded" style={{ background: "#60A5FA" }} />
          <span className="text-gray-400">Runs Per Over</span>
        </div>
        {target && (
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-0.5 rounded border-t border-dashed" style={{ borderColor: "#F5A623" }} />
            <span className="text-gray-400">Target</span>
          </div>
        )}
      </div>
    </div>
  );
}
