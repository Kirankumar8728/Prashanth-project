/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  FileText, 
  BarChart2, 
  ClipboardList, 
  BookOpen, 
  Info, 
  ExternalLink, 
  Mail, 
  Phone,
  BookmarkCheck,
  Award
} from "lucide-react";
import CoverPage from "./components/CoverPage";
import ChapterReader from "./components/ChapterReader";
import ChartsDashboard from "./components/ChartsDashboard";
import InteractiveSurvey from "./components/InteractiveSurvey";

export default function App() {
  const [activeTab, setActiveTab] = useState<"cover" | "chapters" | "dashboard" | "survey">("cover");

  const tabs = [
    { id: "cover", label: "Cover & Certificates", icon: FileText },
    { id: "chapters", label: "Chapters & Literature", icon: BookOpen },
    { id: "dashboard", label: "Analytics Dashboard", icon: BarChart2 },
    { id: "survey", label: "Interactive Survey", icon: ClipboardList },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 font-sans flex flex-col justify-between">
      {/* Dynamic Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm px-4 py-3 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Meta info */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-indigo-600 rounded-xl text-white shadow-md shadow-indigo-600/10">
              <BookmarkCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-mono tracking-widest bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                  MBA Research Hub
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest bg-indigo-50 text-indigo-700 font-bold px-2 py-0.5 rounded-full border border-indigo-200">
                  Batch 2024-2026
                </span>
              </div>
              <h1 className="text-md md:text-lg font-black text-slate-900 mt-0.5 tracking-tight font-sans">
                Investors Preference on Mutual Funds
              </h1>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  id={`nav-tab-${tab.id}`}
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-white text-indigo-950 shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Showcase Stage */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 py-6 md:px-8 space-y-6">
        {/* Academic Meta Banner */}
        {activeTab === "cover" && (
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                Academic Project Report Companion
              </h2>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-2xl">
                Exploring the research on <strong className="text-slate-800 italic">&ldquo;Investors Preferences on mutual funds with reference to Indiabulls Securities Limited&rdquo;</strong> submitted to Malla Reddy Engineering College (Autonomous).
              </p>
            </div>
            <div className="flex gap-4 items-center shrink-0 border-t md:border-t-0 pt-4 md:pt-0 w-full md:w-auto justify-center">
              <div className="text-center bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-100">
                <span className="block text-[10px] text-slate-400 font-mono uppercase">Author</span>
                <span className="text-xs font-bold text-slate-700">Edulapally Prashanth Kumar</span>
              </div>
              <div className="text-center bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-100">
                <span className="block text-[10px] text-slate-400 font-mono uppercase">Advisor</span>
                <span className="text-xs font-bold text-slate-700">Dr. M.P. Suri Ganesh</span>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Views Tab Rendering */}
        <div className="min-h-[500px]">
          {activeTab === "cover" && <CoverPage />}
          {activeTab === "chapters" && <ChapterReader />}
          {activeTab === "dashboard" && <ChartsDashboard />}
          {activeTab === "survey" && <InteractiveSurvey />}
        </div>
      </main>

      {/* Footer Details */}
      <footer className="bg-slate-900 text-white border-t border-slate-800 mt-12 py-8 px-4 md:px-8 text-xs font-mono">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-slate-400">
              Malla Reddy Engineering College
            </h3>
            <p className="text-slate-500 text-[11px] mt-1">
              Autonomous Institution accredited by NAAC with A++ Grade. Approved by AICTE, Affiliated to JNTUH. Secunderabad, Telangana.
            </p>
          </div>

          <div className="flex flex-col gap-1 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              mrec.2002@gmail.com
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-indigo-400" />
              +91 9348161125, 9348161303
            </span>
          </div>

          <div className="text-slate-500 text-[11px] text-left md:text-right">
            <p>&copy; 2026 Edulapally Prashanth Kumar.</p>
            <p className="mt-0.5">All Rights Reserved. MBA Finance Dissertation Project.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
