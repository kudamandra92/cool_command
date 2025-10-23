import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ChartBar() {
  const [range, setRange] = useState("weekly");
  const [visibleCount, setVisibleCount] = useState(7);

  // 🧩 Dummy Data — same for all ranges (could be fetched later)
  const dataSets = {
    daily: Array.from({ length: 24 }, (_, i) => ({
      name: `Day ${i + 1}`,
      value: Math.floor(Math.random() * 120) + 20,
    })),
    weekly: Array.from({ length: 24 }, (_, i) => ({
      name: `Week ${i + 1}`,
      value: Math.floor(Math.random() * 1000) + 500,
    })),
    monthly: Array.from({ length: 24 }, (_, i) => ({
      name: `Month ${i + 1}`,
      value: Math.floor(Math.random() * 5000) + 2000,
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
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      {/* 🔘 Chart Controls */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Sales Overview</h2>
        <select
          className="border rounded-md p-2 text-sm"
          value={range}
          onChange={(e) => setRange(e.target.value)}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      {/* 📊 Responsive Bar Chart */}
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data.slice(-visibleCount)}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
