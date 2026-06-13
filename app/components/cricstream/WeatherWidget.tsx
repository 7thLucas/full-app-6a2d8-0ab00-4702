import type { weatherData } from "~/lib/cricket-data";

interface WeatherWidgetProps {
  weather: typeof weatherData;
}

export function WeatherWidget({ weather }: WeatherWidgetProps) {
  return (
    <div
      className="rounded-xl p-4"
      style={{ background: "#0F1629", border: "1px solid #1E2A45" }}
    >
      <div className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-semibold">Conditions</div>

      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">{weather.icon}</span>
        <div>
          <div className="text-white font-bold text-lg">{weather.temperature}°C</div>
          <div className="text-gray-400 text-xs">{weather.condition}</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="text-center">
          <div className="text-gray-500 text-xs">Humidity</div>
          <div className="text-white font-semibold text-sm">{weather.humidity}%</div>
        </div>
        <div className="text-center">
          <div className="text-gray-500 text-xs">Wind</div>
          <div className="text-white font-semibold text-sm">{weather.windSpeed} kph</div>
        </div>
        <div className="text-center">
          <div className="text-gray-500 text-xs">Dew</div>
          <div className="text-yellow-400 font-semibold text-sm">{weather.dewFactor}</div>
        </div>
      </div>

      <div
        className="rounded-lg px-3 py-2"
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        <div className="text-gray-500 text-xs mb-1 uppercase tracking-wide">Pitch Report</div>
        <div className="text-gray-300 text-xs leading-relaxed">{weather.pitch}</div>
      </div>
    </div>
  );
}
