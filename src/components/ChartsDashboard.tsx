/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { tablesData } from "../data/chartsData";
import { BarChart2, FileSpreadsheet, FileText, Info, Percent, TrendingUp, Users } from "lucide-react";

export default function ChartsDashboard() {
  const [activeTableIdx, setActiveTableIdx] = useState<number>(0);

  const activeTable = useMemo(() => {
    return tablesData[activeTableIdx];
  }, [activeTableIdx]);

  // Color palette for charts
  const colors = ["#4f46e5", "#0ea5e9", "#10b981", "#f59e0b", "#ec4899", "#8b5cf6", "#64748b"];

  // Custom cell label for pie charts
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central" className="text-[10px] font-bold">
        {percent > 0.05 ? `${(percent * 100).toFixed(0)}%` : ""}
      </text>
    );
  };

  // Render the appropriate Recharts component based on table index
  const renderChart = () => {
    const tableNo = activeTable.tableNo;
    const data = activeTable.data;

    if (tableNo === "4.1" || tableNo === "4.3" || tableNo === "4.4" || tableNo === "4.5" || tableNo === "4.9" || tableNo === "4.10" || tableNo === "4.12") {
      // Standard Bar Charts
      const xKey = Object.keys(data[0])[0];
      const yKey = Object.keys(data[0])[1]; // usually Percentage or Respondents

      return (
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey={xKey} tick={{ fill: "#64748b", fontSize: 11 }} tickLine={false} axisLine={false} interval={0} angle={-15} textAnchor="end" />
            <YAxis tick={{ fill: "#64748b", fontSize: 11 }} tickLine={false} axisLine={false} unit="%" />
            <Tooltip contentStyle={{ backgroundColor: "#1e293b", borderRadius: "8px", border: "none", color: "#f8fafc" }} />
            <Bar dataKey={yKey} fill="#4f46e5" radius={[6, 6, 0, 0]} barSize={40}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      );
    }

    if (tableNo === "4.2" || tableNo === "4.6" || tableNo === "4.8" || tableNo === "4.11") {
      // Pie Charts for satisfaction, time horizon, reputable option, investment avenues
      const xKey = Object.keys(data[0])[0];
      const yKey = "Percentage (%)";

      return (
        <ResponsiveContainer width="100%" height={320}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey={yKey}
              nameKey={xKey}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: "#1e293b", borderRadius: "8px", border: "none", color: "#f8fafc" }} />
            <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: "11px", color: "#475569" }} />
          </PieChart>
        </ResponsiveContainer>
      );
    }

    if (tableNo === "4.7") {
      // Franklin / SBI / HDFC weighted averages
      return (
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={data} layout="vertical" margin={{ top: 10, right: 10, left: 30, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
            <XAxis type="number" tick={{ fill: "#64748b", fontSize: 11 }} tickLine={false} axisLine={false} />
            <YAxis dataKey="Companies" type="category" tick={{ fill: "#1e293b", fontSize: 11, fontWeight: "bold" }} tickLine={false} axisLine={false} />
            <Tooltip contentStyle={{ backgroundColor: "#1e293b", borderRadius: "8px", border: "none", color: "#f8fafc" }} />
            <Bar dataKey="Weighted Avg" fill="#0ea5e9" radius={[0, 6, 6, 0]} barSize={20}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      );
    }

    if (tableNo === "4.13") {
      // Comparison spider/radar chart for Real Estate, Stocks, Mutual Funds, Fixed Deposits, Insurance
      return (
        <ResponsiveContainer width="100%" height={320}>
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
            <PolarGrid stroke="#cbd5e1" />
            <PolarAngleAxis dataKey="Investment Type" tick={{ fill: "#1e293b", fontSize: 11, fontWeight: "semibold" }} />
            <PolarRadiusAxis angle={30} domain={[0, 5]} tick={{ fill: "#64748b", fontSize: 10 }} />
            <Radar name="Rate of Return" dataKey="Rate of Return" stroke="#4f46e5" fill="#4f46e5" fillOpacity={0.2} />
            <Radar name="Liquidity" dataKey="Liquidity" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.15} />
            <Radar name="Safety" dataKey="Safety" stroke="#10b981" fill="#10b981" fillOpacity={0.15} />
            <Tooltip contentStyle={{ backgroundColor: "#1e293b", borderRadius: "8px", border: "none", color: "#f8fafc" }} />
            <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: "10px" }} />
          </RadarChart>
        </ResponsiveContainer>
      );
    }

    return null;
  };

  return (
    <div className="space-y-6">
      {/* Overview stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-xl border border-indigo-200/40 shadow-sm flex items-center gap-3">
          <div className="p-3 bg-indigo-600 rounded-lg text-white">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-[10px] uppercase text-indigo-950/60 font-mono">Sample size</span>
            <span className="text-lg font-bold text-indigo-950">50 Respondents</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-sky-50 to-sky-100 p-4 rounded-xl border border-sky-200/40 shadow-sm flex items-center gap-3">
          <div className="p-3 bg-sky-500 rounded-lg text-white">
            <Percent className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-[10px] uppercase text-sky-950/60 font-mono">Safety first</span>
            <span className="text-lg font-bold text-sky-950">42% Preference</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 rounded-xl border border-emerald-200/40 shadow-sm flex items-center gap-3">
          <div className="p-3 bg-emerald-500 rounded-lg text-white">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-[10px] uppercase text-emerald-950/60 font-mono">FT Popularity</span>
            <span className="text-lg font-bold text-emerald-950">39% 1st Choice</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl border border-amber-200/40 shadow-sm flex items-center gap-3">
          <div className="p-3 bg-amber-500 rounded-lg text-white">
            <BarChart2 className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-[10px] uppercase text-amber-950/60 font-mono">Top Satisfied</span>
            <span className="text-lg font-bold text-amber-950">80% Extremely</span>
          </div>
        </div>
      </div>

      {/* Main Dashboard Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: Table List */}
        <div className="lg:col-span-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm space-y-3 max-h-[620px] overflow-y-auto">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">Table Selection</h3>
          <div className="space-y-1">
            {tablesData.map((tab, idx) => (
              <button
                id={`table-selector-btn-${tab.tableNo}`}
                key={tab.tableNo}
                onClick={() => setActiveTableIdx(idx)}
                className={`w-full text-left p-2.5 rounded-lg text-xs font-medium flex items-start gap-2.5 transition-colors ${
                  activeTableIdx === idx
                    ? "bg-indigo-50 text-indigo-950 font-bold border-l-4 border-indigo-600"
                    : "text-slate-600 hover:bg-slate-50 border-l-4 border-transparent"
                }`}
              >
                <span className="font-mono bg-slate-100 text-slate-500 text-[10px] px-1.5 py-0.5 rounded font-bold">
                  {tab.tableNo}
                </span>
                <span className="line-clamp-2 leading-snug">{tab.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Active Chart and Original Table */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm space-y-6">
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                  Table {activeTable.tableNo}
                </span>
                <h2 className="text-lg font-bold text-slate-900 mt-1">{activeTable.title}</h2>
                <p className="text-[10px] text-slate-400 font-mono mt-0.5">Source: {activeTable.source}</p>
              </div>
            </div>

            {/* Rendered Chart */}
            <div className="p-4 bg-slate-50/50 rounded-xl border border-slate-100 flex items-center justify-center min-h-[340px]">
              {renderChart()}
            </div>

            {/* Display original data grid */}
            <div className="space-y-2">
              <div className="flex items-center gap-1 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <FileSpreadsheet className="w-3.5 h-3.5 text-slate-400" />
                <span>Original Research Table</span>
              </div>
              <div className="overflow-x-auto border border-slate-100 rounded-lg">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-100">
                      {activeTable.columns.map((col, idx) => (
                        <th key={idx} className="p-3">{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {activeTable.data.map((row, rowIdx) => (
                      <tr key={rowIdx} className="hover:bg-slate-50/50">
                        {activeTable.columns.map((col, colIdx) => (
                          <td key={colIdx} className="p-3 font-medium">
                            {row[col] !== undefined ? row[col] : row[Object.keys(row)[colIdx]]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Researcher's interpretation text */}
            <div className="bg-indigo-50/40 p-4 rounded-xl border border-indigo-100/50 flex gap-3">
              <Info className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-indigo-950 uppercase tracking-wider mb-1">Researcher Interpretation</h4>
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed text-justify">
                  {activeTable.interpretation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
