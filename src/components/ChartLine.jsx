import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ChartLine() {
  const [range, setRange] = useState("weekly");

  // 🧩 Dummy data sets
  const dataSets = {
    daily: [
      { name: "Mon", value: 40 },
      { name: "Tue", value: 60 },
      { name: "Wed", value: 80 },
      { name: "Thu", value: 70 },
      { name: "Fri", value: 90 },
      { name: "Sat", value: 100 },
      { name: "Sun", value: 50 },
    ],
    weekly: [
      { name: "Week 1", value: 300 },
      { name: "Week 2", value: 400 },
      { name: "Week 3", value: 350 },
      { name: "Week 4", value: 450 },
    ],
    monthly: [
      { name: "Jan", value: 1200 },
      { name: "Feb", value: 1500 },
      { name: "Mar", value: 1400 },
      { name: "Apr", value: 1700 },
      { name: "May", value: 1800 },
      { name: "Jun", value: 1600 },
    ],
  };

  const data = dataSets[range];

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      {/* 🔘 Chart Controls */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Visitors Overview</h2>
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

      {/* 📈 Line Chart */}
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
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