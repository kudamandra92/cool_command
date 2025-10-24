import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ChartLine({ title = "" }) {
  const [range, setRange] = useState("weekly");
  const [visibleCount, setVisibleCount] = useState(7);

  // 🧩 Dummy Data — same for all ranges (could be fetched later)
  const dataSets = {
    daily: Array.from({ length: 24 }, (_, i) => ({
      name: `Day ${i + 1}`,
      value: Math.floor(Math.random() * 120) + 20,
      value2: Math.floor(Math.random() * 220) + 20,
    })),
    weekly: Array.from({ length: 24 }, (_, i) => ({
      name: `Week ${i + 1}`,
      value: Math.floor(Math.random() * 1000) + 500,
      value2: Math.floor(Math.random() * 1100) + 300,
    })),
    monthly: Array.from({ length: 24 }, (_, i) => ({
      name: `Month ${i + 1}`,
      value: Math.floor(Math.random() * 5000) + 2000,
      value2: Math.floor(Math.random() * 5500) + 500,
    })),
  };

  const data = dataSets[range];

  // 🧠 Handle responsive visible bars
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(7); // small (mobile)
      else if (width < 1024) setVisibleCount(12); // medium (tablet)
      else setVisibleCount(24); // large (desktop)
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  return (
    <div className="bg-yellowish p-4 rounded-xl shadow-md w-full">
      {/* 🔘 Chart Controls */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <select
          className="border rounded-md p-2 text-sm text-yellowish bg-blueish"
          value={range}
          onChange={(e) => setRange(e.target.value)}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      {/* 📊 Responsive Line Chart */}
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data.slice(-visibleCount)}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#718AB3"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />
            <Line
              type="monotone"
              dataKey="value2"
              stroke="#72B592"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
