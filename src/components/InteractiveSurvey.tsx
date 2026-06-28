/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { CheckCircle, HelpCircle, RefreshCw, BarChart2, Award, ClipboardList } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";

export default function InteractiveSurvey() {
  const [answers, setAnswers] = useState<Record<string, string>>({
    employment: "Business class",
    income: "₹1–2 lakhs",
    savings: "₹25,000–30,000",
    influence: "Safety",
    satisfaction: "5 = Extremely satisfied",
    reputable: "Yes, less risky",
    preferredFirm: "Franklin Templeton",
    avenue: "Insurance",
    amount: "₹10,000–50,000",
    goal: "Safety",
    horizon: "Medium-term",
    consult: "Financial advisor",
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  // Original study results for comparison
  const studyComparisonData: Record<string, { label: string; studyPercent: number }[]> = {
    influence: [
      { label: "Safety", studyPercent: 42 },
      { label: "Bank services", studyPercent: 20 },
      { label: "Historical performance", studyPercent: 18 },
      { label: "Word of mouth", studyPercent: 14 },
      { label: "Advertising", studyPercent: 6 },
    ],
    reputable: [
      { label: "Yes, less risky", studyPercent: 80 },
      { label: "No, stock market is better", studyPercent: 20 },
    ],
    avenue: [
      { label: "Insurance", studyPercent: 45 },
      { label: "Real estate", studyPercent: 20 },
      { label: "Stock market", studyPercent: 15 },
      { label: "Fixed deposits", studyPercent: 12 },
      { label: "Mutual funds", studyPercent: 8 },
    ],
    goal: [
      { label: "Safety", studyPercent: 30 },
      { label: "Capital appreciation", studyPercent: 27 },
      { label: "Tax benefits", studyPercent: 26 },
      { label: "Liquidity", studyPercent: 17 },
    ],
    horizon: [
      { label: "Short-term", studyPercent: 25 },
      { label: "Medium-term", studyPercent: 63 },
      { label: "Long-term", studyPercent: 12 },
    ],
    consult: [
      { label: "Financial advisor", studyPercent: 35 },
      { label: "Family members", studyPercent: 30 },
      { label: "Decide independently", studyPercent: 25 },
      { label: "Friends/Relatives", studyPercent: 10 },
    ],
  };

  const handleSelect = (key: string, val: string) => {
    setAnswers((prev) => ({ ...prev, [key]: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  // Determine investor persona based on answers
  const investorPersona = () => {
    const { goal, horizon, avenue } = answers;
    if (goal === "Safety" || avenue === "Fixed deposits" || avenue === "Insurance") {
      return {
        title: "Conservative & Security-Focused",
        description: "You heavily prioritize the preservation of your principal capital and prefer structured safety over high-yielding speculative avenues. You align with 42% of the Indiabulls survey participants who cite Safety as the single most critical parameter.",
        strategy: "Consider Debt Mutual Funds, Fixed Maturity Plans (FMPs), and Large Cap blue-chip options.",
      };
    } else if (goal === "Capital appreciation" && (horizon === "Long-term" || avenue === "Stock market")) {
      return {
        title: "Aggressive Wealth Accumulator",
        description: "You have a strong risk tolerance and look for capital appreciation over the long run. You are willing to navigate direct equity markets or active mutual funds to lock in superior compounding.",
        strategy: "Focus on Diversified Equity Funds, Flexi-Cap Funds, and Systematic Investment Plans (SIPs) with a 5+ year timeframe.",
      };
    } else {
      return {
        title: "Balanced & Objective-Driven",
        description: "You look for a rational blend of safety, modest growth, and liquidity. You value tactical diversification to make sure your investments stay agile across varying market cycles.",
        strategy: "A combination of Hybrid Funds, ELSS (Tax Savers), and conservative equity schemes fits your profile perfectly.",
      };
    }
  };

  const persona = investorPersona();

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-900 to-slate-900 p-6 text-white flex items-center gap-3">
        <ClipboardList className="w-6 h-6 text-indigo-300" />
        <div>
          <h2 className="text-lg font-bold">Interactive Research Questionnaire</h2>
          <p className="text-xs text-indigo-100/70">Test your profile and see how your preferences compare to the 50 original study respondents.</p>
        </div>
      </div>

      {!submitted ? (
        /* Form View */
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Section A: Demographics */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2">
                Section A: Demographics
              </h3>

              {/* 1. Employment Status */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                  1. What is your Employment Status?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["Business class", "Student", "Service employee", "Professional", "Retired"].map((opt) => (
                    <button
                      id={`opt-employment-${opt}`}
                      type="button"
                      key={opt}
                      onClick={() => handleSelect("employment", opt)}
                      className={`text-left p-2.5 rounded-lg border text-xs font-medium transition-all ${
                        answers.employment === opt
                          ? "bg-indigo-50 border-indigo-500 text-indigo-950 font-bold"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Annual Income */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  2. What is your Annual Income range?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["Less than ₹1 lakh", "₹1–2 lakhs", "₹2–3 lakhs", "Above ₹3 lakhs"].map((opt) => (
                    <button
                      id={`opt-income-${opt}`}
                      type="button"
                      key={opt}
                      onClick={() => handleSelect("income", opt)}
                      className={`text-left p-2.5 rounded-lg border text-xs font-medium transition-all ${
                        answers.income === opt
                          ? "bg-indigo-50 border-indigo-500 text-indigo-950 font-bold"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Annual Savings */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  3. What is your typical Annual Savings range?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["Less than ₹25,000", "₹25,000–30,000", "₹50,000–1,00,000", "Above ₹1,00,000"].map((opt) => (
                    <button
                      id={`opt-savings-${opt}`}
                      type="button"
                      key={opt}
                      onClick={() => handleSelect("savings", opt)}
                      className={`text-left p-2.5 rounded-lg border text-xs font-medium transition-all ${
                        answers.savings === opt
                          ? "bg-indigo-50 border-indigo-500 text-indigo-950 font-bold"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Section B: Investment Preferences */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2">
                Section B: Investment Preferences
              </h3>

              {/* 4. Influence */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  4. What element most influences your choices with Indiabulls?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["Safety", "Bank services", "Historical performance", "Word of mouth", "Advertising"].map((opt) => (
                    <button
                      id={`opt-influence-${opt}`}
                      type="button"
                      key={opt}
                      onClick={() => handleSelect("influence", opt)}
                      className={`text-left p-2.5 rounded-lg border text-xs font-medium transition-all ${
                        answers.influence === opt
                          ? "bg-indigo-50 border-indigo-500 text-indigo-950 font-bold"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* 7. Preferred Firm */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  5. Which Mutual Fund Firm do you prefer most?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["Franklin Templeton", "SBI", "HDFC", "Birla", "Reliance", "UTI"].map((opt) => (
                    <button
                      id={`opt-preferredFirm-${opt}`}
                      type="button"
                      key={opt}
                      onClick={() => handleSelect("preferredFirm", opt)}
                      className={`text-left p-2.5 rounded-lg border text-xs font-medium transition-all ${
                        answers.preferredFirm === opt
                          ? "bg-indigo-50 border-indigo-500 text-indigo-950 font-bold"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* 8. Avenue */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  6. If given choice of ₹1 Lakh, where would you invest?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["Insurance", "Real estate", "Fixed deposits", "Stock market", "Mutual funds"].map((opt) => (
                    <button
                      id={`opt-avenue-${opt}`}
                      type="button"
                      key={opt}
                      onClick={() => handleSelect("avenue", opt)}
                      className={`text-left p-2.5 rounded-lg border text-xs font-medium transition-all ${
                        answers.avenue === opt
                          ? "bg-indigo-50 border-indigo-500 text-indigo-950 font-bold"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section C: Investment Behavior */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2">
                Section C: Investment Behavior
              </h3>

              {/* 9. Contribution Size */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  7. What is your typical Mutual Fund contribution size?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["Below ₹10,000", "₹10,000–50,000", "₹50,000–1,00,000"].map((opt) => (
                    <button
                      id={`opt-amount-${opt}`}
                      type="button"
                      key={opt}
                      onClick={() => handleSelect("amount", opt)}
                      className={`text-left p-2 px-1.5 rounded-lg border text-[11px] font-medium transition-all ${
                        answers.amount === opt
                          ? "bg-indigo-50 border-indigo-500 text-indigo-950 font-bold"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* 10. Goals */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  8. What is your primary Investment Goal?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["Safety", "Capital appreciation", "Tax benefits", "Liquidity"].map((opt) => (
                    <button
                      id={`opt-goal-${opt}`}
                      type="button"
                      key={opt}
                      onClick={() => handleSelect("goal", opt)}
                      className={`text-left p-2.5 rounded-lg border text-xs font-medium transition-all ${
                        answers.goal === opt
                          ? "bg-indigo-50 border-indigo-500 text-indigo-950 font-bold"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2">
                Section D: Strategy
              </h3>

              {/* 11. Horizon */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  9. What is your preferred Investment Time Horizon?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["Short-term", "Medium-term", "Long-term"].map((opt) => (
                    <button
                      id={`opt-horizon-${opt}`}
                      type="button"
                      key={opt}
                      onClick={() => handleSelect("horizon", opt)}
                      className={`text-left p-2.5 rounded-lg border text-xs font-medium transition-all ${
                        answers.horizon === opt
                          ? "bg-indigo-50 border-indigo-500 text-indigo-950 font-bold"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* 12. Consultation */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  10. Who do you consult before making choices?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["Financial advisor", "Family members", "Decide independently"].map((opt) => (
                    <button
                      id={`opt-consult-${opt}`}
                      type="button"
                      key={opt}
                      onClick={() => handleSelect("consult", opt)}
                      className={`text-left p-2 px-1 rounded-lg border text-[10px] font-medium leading-tight transition-all ${
                        answers.consult === opt
                          ? "bg-indigo-50 border-indigo-500 text-indigo-950 font-bold"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex justify-end">
            <button
              id="submit-survey-btn"
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl text-sm font-bold shadow-md hover:bg-indigo-700 transition-all flex items-center gap-2 cursor-pointer"
            >
              <CheckCircle className="w-4 h-4" />
              Generate Investor Profile
            </button>
          </div>
        </form>
      ) : (
        /* Results View */
        <div className="p-6 md:p-8 space-y-8">
          {/* Investor Persona Card */}
          <div className="bg-indigo-50/70 border border-indigo-100 p-6 rounded-2xl space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-indigo-600 text-white rounded-lg">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-wider font-bold text-indigo-600">Your Investor Profile</span>
                <h3 className="text-md md:text-lg font-bold text-slate-900">{persona.title}</h3>
              </div>
            </div>
            <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
              {persona.description}
            </p>
            <div className="pt-3 border-t border-indigo-200/50 text-xs text-slate-700 font-mono">
              <strong className="text-indigo-900 uppercase tracking-wider block mb-1">Recommended Approach:</strong>
              {persona.strategy}
            </div>
          </div>

          {/* Comparative analysis with Recharts */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2">
              Comparative Analysis against Study Respondents (N=50)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Plot 1: Primary Motivation */}
              <div className="border border-slate-100 rounded-xl p-4 space-y-2 bg-slate-50/30">
                <div className="flex justify-between items-center text-xs font-semibold text-slate-700">
                  <span>Investment Objective Comparison</span>
                  <span className="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded font-mono">
                    Your Choice: {answers.goal}
                  </span>
                </div>
                <div className="h-48 mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={studyComparisonData.goal}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis dataKey="label" tick={{ fontSize: 10 }} />
                      <YAxis tick={{ fontSize: 10 }} unit="%" />
                      <Tooltip />
                      <Bar dataKey="studyPercent" fill="#6366f1" radius={[4, 4, 0, 0]} name="Survey %">
                        {studyComparisonData.goal.map((entry, idx) => (
                          <Cell
                            key={`cell-${idx}`}
                            fill={entry.label.toLowerCase() === answers.goal.toLowerCase() ? "#4f46e5" : "#cbd5e1"}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Plot 2: Time Horizon */}
              <div className="border border-slate-100 rounded-xl p-4 space-y-2 bg-slate-50/30">
                <div className="flex justify-between items-center text-xs font-semibold text-slate-700">
                  <span>Investment Time Horizon</span>
                  <span className="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded font-mono">
                    Your Choice: {answers.horizon}
                  </span>
                </div>
                <div className="h-48 mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={studyComparisonData.horizon}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis dataKey="label" tick={{ fontSize: 10 }} />
                      <YAxis tick={{ fontSize: 10 }} unit="%" />
                      <Tooltip />
                      <Bar dataKey="studyPercent" fill="#10b981" radius={[4, 4, 0, 0]} name="Survey %">
                        {studyComparisonData.horizon.map((entry, idx) => (
                          <Cell
                            key={`cell-${idx}`}
                            fill={entry.label.toLowerCase() === answers.horizon.toLowerCase() ? "#10b981" : "#cbd5e1"}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t border-slate-100">
            <button
              id="reset-survey-btn"
              onClick={handleReset}
              className="px-5 py-2.5 border border-slate-200 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-50 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Retake Survey
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
