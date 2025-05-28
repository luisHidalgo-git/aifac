import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";

export function HeatMap() {
  const trafficData = [
    { time: "10:00", visitors: 120 },
    { time: "11:00", visitors: 180 },
    { time: "12:00", visitors: 200 },
    { time: "13:00", visitors: 150 },
    { time: "14:00", visitors: 280 },
    { time: "15:00", visitors: 310 },
    { time: "16:00", visitors: 280 },
    { time: "17:00", visitors: 200 },
  ];

  const marketTrends = [
    {
      region: "Europe",
      trend: "up",
      percentage: 12,
      popular: "Contemporary",
    },
    {
      region: "North America",
      trend: "up",
      percentage: 8,
      popular: "Digital Art",
    },
    {
      region: "Asia",
      trend: "down",
      percentage: 3,
      popular: "Traditional",
    },
  ];

  return (
    <div className="px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        Analytics Dashboard
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <h3 className="text-xl font-semibold mb-4">Visitor Traffic</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="visitors"
                  stroke="#2563eb"
                  fill="#93c5fd"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <h3 className="text-xl font-semibold mb-4">
            Market Trends by Region
          </h3>
          <div className="space-y-4">
            {marketTrends.map((trend) => (
              <div key={trend.region} className="p-4 border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-gray-900">{trend.region}</h4>
                  <div className="flex items-center">
                    {trend.trend === "up" ? (
                      <ArrowUpIcon className="h-5 w-5 text-green-500" />
                    ) : (
                      <ArrowDownIcon className="h-5 w-5 text-red-500" />
                    )}
                    <span
                      className={`ml-1 font-medium ${
                        trend.trend === "up" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {trend.percentage}%
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Most Popular: {trend.popular}
                </p>
              </div>
            ))}
          </div>

          <button className="mt-6 w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
            Export Data
          </button>
        </div>
      </div>
    </div>
  );
}
