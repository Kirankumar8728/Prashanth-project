/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Award, Briefcase, CheckCircle, FileText, Landmark, ShieldCheck, User, Users } from "lucide-react";
import { motion } from "motion/react";
import { MrecLogo, NaacLogo } from "./Logos";

export default function CoverPage() {
  const [activeCert, setActiveCert] = useState<"cover" | "college" | "decl" | "ack" | "corp">("cover");

  const certificates = [
    { id: "cover", label: "Cover Page", icon: FileText },
    { id: "college", label: "College Certificate", icon: Landmark },
    { id: "decl", label: "Declaration", icon: CheckCircle },
    { id: "ack", label: "Acknowledgement", icon: Users },
    { id: "corp", label: "Indiabulls Certificate", icon: Briefcase },
  ];

  return (
    <div id="cover-page-section" className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      {/* Tab Navigation */}
      <div className="flex flex-wrap border-b border-slate-100 bg-slate-50/70 p-2 gap-1">
        {certificates.map((cert) => {
          const Icon = cert.icon;
          return (
            <button
              id={`cert-tab-${cert.id}`}
              key={cert.id}
              onClick={() => setActiveCert(cert.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium transition-all ${
                activeCert === cert.id
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {cert.label}
            </button>
          );
        })}
      </div>

      {/* Main Document Frame */}
      <div className="p-6 md:p-12 max-w-3xl mx-auto my-4 min-h-[600px] flex flex-col justify-between">
        {activeCert === "cover" && (
          <motion.div
            id="cover-document"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col justify-between h-full text-center border-4 border-double border-indigo-900 p-8 md:p-12 rounded-lg bg-slate-50/30"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold">A Project Report</span>
              <h1 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-slate-900 font-sans leading-snug">
                “Investors Preferences on mutual funds with reference to Indiabulls Securities pvt Limited”
              </h1>
              <p className="mt-6 text-xs text-slate-500 italic">
                Submitted in partial fulfilment for the award of Degree of
              </p>
              <h2 className="mt-2 text-md md:text-lg font-bold text-indigo-950 tracking-wider">
                MASTER OF BUSINESS ADMINISTRATION
              </h2>
            </div>

            <div className="my-10 space-y-4">
              <div>
                <p className="text-xs text-slate-400 italic">Submitted by</p>
                <p className="text-lg font-bold text-slate-800 tracking-wide uppercase mt-1">
                  EDULAPALLY PRASHANTH KUMAR
                </p>
                <p className="text-xs text-slate-500 font-mono mt-0.5">Reg. No: 24J41E0018</p>
              </div>

              <div className="pt-4 border-t border-slate-100 max-w-xs mx-auto">
                <p className="text-xs text-slate-400 italic">Under the Guidance of</p>
                <p className="text-md font-semibold text-slate-800 mt-1">DR. M.P. SURI GANESH</p>
                <p className="text-xs text-slate-500 italic">Associate Professor</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              {/* Logo Vector */}
              <MrecLogo className="w-16 h-16 shadow-sm hover:scale-105 transition-transform duration-300" />

              <div>
                <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase">
                  MALLA REDDY ENGINEERING COLLEGE
                </h3>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">(AUTONOMOUS)</p>
                <p className="text-[10px] text-slate-400 mt-1 max-w-md">
                  Maisammaguda, Dhulapally, (Post via Kompally), Secunderabad-500100
                </p>
                <p className="text-[10px] text-slate-400 font-mono">
                  Phone: 9348161125, 9348161303 | Email: mrec.2002@gmail.com
                </p>
                <p className="text-xs font-bold text-indigo-900 mt-3 font-mono">2024-2026</p>
              </div>
            </div>
          </motion.div>
        )}

        {activeCert === "college" && (
          <motion.div
            id="college-certificate"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-slate-200 p-8 md:p-12 rounded-xl bg-white shadow-sm space-y-6 text-slate-800 relative overflow-hidden"
          >
            {/* Header branding */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-6">
              <div className="flex items-center gap-3">
                <MrecLogo className="w-14 h-14 hover:scale-105 transition-transform duration-300" />
                <div>
                  <h2 className="text-sm md:text-md font-bold text-red-600 leading-tight uppercase">
                    MALLA REDDY ENGINEERING COLLEGE
                  </h2>
                  <p className="text-[10px] text-slate-500 uppercase leading-none font-semibold">
                    (AUTONOMOUS) | Sponsored by CMR Educational Society
                  </p>
                  <p className="text-[9px] text-slate-400 uppercase leading-none mt-1">
                    Approved by AICTE & Affiliated to JNTUH
                  </p>
                </div>
              </div>
              <NaacLogo className="w-14 h-14 hover:scale-105 transition-transform duration-300" />
            </div>

            <div className="text-center py-2">
              <h3 className="text-xs uppercase font-mono tracking-widest text-slate-400">Department of MBA</h3>
              <h1 className="text-xl font-bold border-b-2 border-slate-800 pb-1 inline-block mt-1 text-slate-900 tracking-wide">
                CERTIFICATE
              </h1>
            </div>

            <p className="text-sm leading-relaxed text-slate-700 text-justify indent-8">
              This is to certify that the project <strong className="text-slate-900 italic">“Investors Preferences on mutual funds with reference to Indiabulls Securities pvt Limited”</strong> Submitted by <strong className="text-slate-900">EDULAPALLY PRASHANTH KUMAR</strong> bearing <strong className="text-slate-900 font-mono">Reg. No: 24J41E0018</strong> of the Department of <strong className="text-slate-900">MASTER OF BUSINESS ADMINISTRATION</strong> of this college has done Bonafide work under my guidance submitted to <strong className="text-slate-900">MALLA REDDY ENGINEERING COLLEGE (AUTONOMOUS)</strong> for the award of Degree of Master of Business Administration.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-12 text-center text-xs text-slate-600">
              <div>
                <div className="h-8 border-b border-slate-200 w-32 mx-auto"></div>
                <p className="mt-2 font-semibold">Internal Guide</p>
              </div>
              <div>
                <div className="h-8 border-b border-slate-200 w-32 mx-auto"></div>
                <p className="mt-2 font-semibold">Head of the Dept.</p>
              </div>
              <div>
                <div className="h-8 border-b border-slate-200 w-32 mx-auto"></div>
                <p className="mt-2 font-semibold">External Guide</p>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100 flex justify-between text-[11px] text-slate-400 font-mono">
              <div>
                <p><strong>Place:</strong> Secunderabad</p>
                <p><strong>Date:</strong> 2026-06-01</p>
              </div>
              <div className="text-right text-[9px]">
                <p>Phone: 04065918418, 64634234</p>
                <p>Email: mrec.2002@gmail.com</p>
              </div>
            </div>
          </motion.div>
        )}

        {activeCert === "decl" && (
          <motion.div
            id="declaration"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-slate-200 p-8 md:p-12 rounded-xl bg-white shadow-sm space-y-6 text-slate-800"
          >
            <div className="text-center border-b border-slate-100 pb-4">
              <h1 className="text-xl font-bold tracking-widest text-slate-900 border-b-2 border-slate-800 pb-1 inline-block uppercase">
                Declaration
              </h1>
            </div>

            <p className="text-sm leading-relaxed text-slate-700 text-justify indent-8">
              I, <strong className="text-slate-900">EDULAPALLY PRASHANTH KUMAR</strong>, bearing <strong className="text-slate-900 font-mono">Reg. No: 24J41E0018</strong>, hereby declare that the project report on <strong className="text-slate-900 italic">“Investors Preferences on mutual funds with reference to Indiabulls Securities pvt Limited”</strong> has been carried out and submitted by me, under the guidance of <strong className="text-slate-900">DR. M.P. SURI GANESH</strong> Assistant Professor, Department of MBA, <strong className="text-slate-900">MALLA REDDY ENGINEERING COLLEGE (AUTONOMOUS)</strong>.
            </p>

            <p className="text-sm leading-relaxed text-slate-700 text-justify indent-8">
              I further declare that this is the original work done by me and this has not been submitted to any other institution including university or published anywhere else earlier.
            </p>

            <div className="pt-12 flex justify-between items-end text-sm text-slate-700">
              <div>
                <p><strong>Place:</strong> Secunderabad</p>
                <p><strong>Date:</strong> 2026-06-01</p>
              </div>
              <div className="text-right">
                <div className="h-8 border-b border-slate-200 w-48 ml-auto"></div>
                <p className="mt-2 font-bold uppercase">Edulapally Prashanth Kumar</p>
                <p className="text-xs text-slate-400 font-mono">Reg. No: 24J41E0018</p>
              </div>
            </div>
          </motion.div>
        )}

        {activeCert === "ack" && (
          <motion.div
            id="acknowledgement"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-slate-200 p-8 md:p-12 rounded-xl bg-white shadow-sm space-y-5 text-slate-800 max-h-[600px] overflow-y-auto"
          >
            <div className="text-center border-b border-slate-100 pb-4">
              <h1 className="text-xl font-bold tracking-widest text-slate-900 border-b-2 border-slate-800 pb-1 inline-block uppercase">
                Acknowledgement
              </h1>
            </div>

            <div className="text-sm leading-relaxed text-slate-700 space-y-4 text-justify">
              <p>
                I express my sincere thanks to the department of Master of Business Administration (MBA), <strong className="text-slate-900">MALLA REDDY ENGINEERING COLLEGE (AUTONOMOUS)</strong>, for providing excellent environment and encouragement in completing the project.
              </p>
              <p>
                I acknowledge with thanks to the valuable guidance rendered by <strong className="text-slate-900">DR. M.P. SURI GANESH</strong>, Associate Professor, Department of MBA, for his kind cooperation in the times of need.
              </p>
              <p>
                I convey my special thanks to <strong className="text-slate-900">DR. P. RAVINDER REDDY</strong>, Principal MREC, and <strong className="text-slate-900">DR. K. PUSHPA LATHA</strong>, Head of the Department of Master of Business Administration, for their valuable advices in the course of my project work.
              </p>
              <p>
                I express my deepest gratitude to the management of <strong className="text-slate-900">Indiabulls Securities pvt Limited Hyderabad</strong>, for permitting me to undertake the project work in their esteemed company. I also express my sincere thanks to <strong className="text-slate-900">Ms. RACHEL SHALINI</strong>, Assistant Manager, for her help and cooperation throughout the course of my project.
              </p>
              <p>
                I would like to thank my friends for sharing the resources required for successful completion of this project. Lastly, I also acknowledge with humble gratitude to my parents for their continuous support.
              </p>
            </div>

            <div className="pt-8 flex justify-end text-sm text-slate-700">
              <div className="text-right">
                <p className="font-bold uppercase">Edulapally Prashanth Kumar</p>
                <p className="text-xs text-slate-400 font-mono">Reg. No: 24J41E0018</p>
              </div>
            </div>
          </motion.div>
        )}

        {activeCert === "corp" && (
          <motion.div
            id="corporate-certificate"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-slate-200 p-8 md:p-12 rounded-xl bg-white shadow-sm space-y-6 text-slate-800 relative"
          >
            {/* Corporate Header */}
            <div className="flex justify-between items-start border-b border-slate-100 pb-4">
              <div>
                <h1 className="text-2xl font-black text-emerald-600 tracking-tight font-sans">
                  Indiabulls
                </h1>
                <p className="text-[9px] text-slate-400 font-mono uppercase mt-0.5">
                  Indiabulls Securities Limited
                </p>
                <p className="text-[8px] text-slate-400 font-mono max-w-xs leading-tight">
                  Regd Office: F-60 2nd Floor Malhotra Building, Connaught Place, New Delhi-110001
                </p>
              </div>
              <div className="text-right text-[8px] text-slate-400 font-mono">
                <p>Ascent Tower, 2nd Floor</p>
                <p>Road No. 10, Banjara Hills</p>
                <p>Hyderabad - 500 034</p>
                <p>Phone: 040-33546535</p>
              </div>
            </div>

            <div className="text-center py-2">
              <h2 className="text-md font-bold tracking-wider text-slate-900 underline uppercase decoration-slate-400 decoration-1">
                To whom so ever it may concern
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-slate-700 text-justify indent-8">
              This is to certify that <strong className="text-slate-950">Edulapally Prashanth Kumar</strong>, bearing Roll No: <strong className="text-slate-950 font-mono">24J41E0018</strong>, Student of Master of Business Administration (Finance) from <strong className="text-slate-950">Malla Reddy Engineering College</strong>, has successfully completed his academic project work title <strong className="text-slate-950 italic">“A Project Report: Investors Prefer Mutual Funds Via Indiabulls Securities, Attracted by Diversification, Expert Management, and Liquidity to Indiabulls Securities Limited.”</strong>, his duration of 45 days, in Indiabulls Securities Limited under our guidance.
            </p>

            <p className="text-sm leading-relaxed text-slate-700 text-justify indent-8">
              During this tenure we found him sincere and hard working. We wish him all the success for his future endeavors.
            </p>

            <p className="text-sm leading-relaxed text-slate-700 text-justify indent-8">
              This is a genuine work and no part of it has been submitted anywhere for award of any degree/diploma certificate.
            </p>

            {/* Signature Area */}
            <div className="pt-12 flex justify-between items-center">
              <div>
                <div className="w-24 h-24 rounded-full border border-dashed border-emerald-300 flex items-center justify-center p-2 text-center text-[10px] text-emerald-600 font-semibold italic rotate-6">
                  Indiabulls Securities Ltd. stamp
                </div>
              </div>
              <div className="text-right text-xs">
                <p className="font-semibold text-slate-500">For HR Manager</p>
                <div className="h-6 w-32 border-b border-slate-200 ml-auto my-2"></div>
                <p className="font-bold uppercase text-slate-900">G. SATISH KUMAR</p>
                <p className="text-[10px] text-slate-400 font-mono mt-0.5">Indiabulls Securities Ltd.</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
