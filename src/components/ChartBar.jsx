import { useState } from "react";
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

  // 🧩 Dummy Data — simulate changing range
  const dataSets = {
    daily: [
      { name: "Mon", value: 50 },
      { name: "Tue", value: 75 },
      { name: "Wed", value: 100 },
      { name: "Thu", value: 80 },
      { name: "Fri", value: 120 },
      { name: "Sat", value: 90 },
      { name: "Sun", value: 60 },
    ],
    weekly: [
      { name: "Week 1", value: 500 },
      { name: "Week 2", value: 800 },
      { name: "Week 3", value: 750 },
      { name: "Week 4", value: 900 },
    ],
    monthly: [
      { name: "Jan", value: 3000 },
      { name: "Feb", value: 2800 },
      { name: "Mar", value: 3500 },
      { name: "Apr", value: 4000 },
      { name: "May", value: 4200 },
      { name: "Jun", value: 3900 },
    ],
  };

  const data = dataSets[range];

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
          <BarChart data={data}>
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