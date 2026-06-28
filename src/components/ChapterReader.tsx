/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { BookOpen, Copy, Check, Search, FileText, Compass, CornerDownRight, ChevronRight } from "lucide-react";
import { chaptersData } from "../data/chaptersData";
import { Chapter, ChapterSection } from "../types";

export default function ChapterReader() {
  const [selectedChapterId, setSelectedChapterId] = useState<string>("ch1");
  const [activeSectionId, setActiveSectionId] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedSectionId, setCopiedSectionId] = useState<string>("");

  const selectedChapter = useMemo(() => {
    return chaptersData.find((ch) => ch.id === selectedChapterId) || chaptersData[0];
  }, [selectedChapterId]);

  // Handle active section tracking on click or scroll
  const handleSectionClick = (sectionId: string) => {
    setActiveSectionId(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const copyToClipboard = (section: ChapterSection) => {
    const textToCopy = section.content.join("\n\n");
    navigator.clipboard.writeText(textToCopy);
    setCopiedSectionId(section.id);
    setTimeout(() => setCopiedSectionId(""), 2000);
  };

  // Simple highlight search term helper
  const highlightText = (text: string, search: string) => {
    if (!search.trim()) return text;
    const parts = text.split(new RegExp(`(${search})`, "gi"));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === search.toLowerCase() ? (
            <mark key={index} className="bg-amber-200 text-slate-900 rounded px-0.5 font-semibold">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  // Filter sections across ALL chapters for search matches
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const results: { chapter: Chapter; section: ChapterSection; snippet: string }[] = [];

    chaptersData.forEach((ch) => {
      ch.sections.forEach((sec) => {
        const matchingParagraph = sec.content.find((p) =>
          p.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (matchingParagraph) {
          results.push({
            chapter: ch,
            section: sec,
            snippet: matchingParagraph,
          });
        }
      });
    });

    return results;
  }, [searchQuery]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Table of Contents & Navigation Sidebar */}
      <div className="lg:col-span-1 space-y-4">
        {/* Search Panel */}
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">Search Report</label>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              id="search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search terms, eg. SIP..."
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
            />
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs text-rose-600 hover:underline block text-right mt-1 ml-auto"
            >
              Clear Search
            </button>
          )}
        </div>

        {/* Chapters Selector */}
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="bg-slate-50 p-3 border-b border-slate-100">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Chapters</h3>
          </div>
          <div className="divide-y divide-slate-100">
            {chaptersData.map((ch) => (
              <button
                id={`chapter-nav-${ch.id}`}
                key={ch.id}
                onClick={() => {
                  setSelectedChapterId(ch.id);
                  setSearchQuery(""); // clear search on chapter change
                }}
                className={`w-full text-left p-3.5 flex items-start gap-3 transition-colors ${
                  selectedChapterId === ch.id && !searchQuery
                    ? "bg-indigo-50/70 border-l-4 border-indigo-600"
                    : "hover:bg-slate-50 border-l-4 border-transparent"
                }`}
              >
                <div className={`p-1.5 rounded ${selectedChapterId === ch.id ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-500'}`}>
                  <BookOpen className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-400">Chapter {ch.number}</p>
                  <p className={`text-xs font-bold truncate ${selectedChapterId === ch.id ? "text-indigo-950" : "text-slate-700"}`}>
                    {ch.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Current Chapter Sub-Sections TOC */}
        {!searchQuery && (
          <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">On This Chapter</h4>
            <div className="space-y-1.5">
              {selectedChapter.sections.map((sec) => (
                <button
                  id={`section-toc-${sec.id}`}
                  key={sec.id}
                  onClick={() => handleSectionClick(sec.id)}
                  className={`w-full text-left py-1.5 px-2.5 rounded text-xs font-medium flex items-center justify-between transition-all ${
                    activeSectionId === sec.id
                      ? "bg-slate-100 text-indigo-700 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span className="truncate pr-2">{sec.title}</span>
                  {sec.page && <span className="font-mono text-[10px] text-slate-400">p.{sec.page}</span>}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Reading Window */}
      <div className="lg:col-span-3 space-y-6">
        {searchQuery ? (
          /* Search Results View */
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <Compass className="w-5 h-5 text-indigo-600" />
              <h2 className="text-md font-bold text-slate-800">
                Search Results for &ldquo;{searchQuery}&rdquo;
              </h2>
              <span className="ml-auto bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded-full text-xs font-semibold font-mono">
                {searchResults.length} matches
              </span>
            </div>

            {searchResults.length === 0 ? (
              <div className="text-center py-12 text-slate-400">
                <FileText className="w-12 h-12 mx-auto mb-3 opacity-30" />
                <p className="text-sm font-semibold">No results found</p>
                <p className="text-xs">Try searching for other terms like &ldquo;safety&rdquo;, &ldquo;satisfaction&rdquo;, or &ldquo;Franklin&rdquo;.</p>
              </div>
            ) : (
              <div className="space-y-4 divide-y divide-slate-100 max-h-[600px] overflow-y-auto pr-2">
                {searchResults.map((res, index) => (
                  <div key={index} className={`pt-4 ${index === 0 ? "pt-0" : ""}`}>
                    <div className="flex items-center gap-1.5 text-xs text-indigo-600 font-semibold mb-1">
                      <span>Chapter {res.chapter.number}</span>
                      <ChevronRight className="w-3 h-3 text-slate-400" />
                      <button
                        onClick={() => {
                          setSelectedChapterId(res.chapter.id);
                          setSearchQuery("");
                          setTimeout(() => handleSectionClick(res.section.id), 100);
                        }}
                        className="hover:underline text-slate-600"
                      >
                        {res.section.title}
                      </button>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed italic bg-slate-50 p-3 rounded-lg border-l-2 border-indigo-400">
                      &ldquo;{highlightText(res.snippet, searchQuery)}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Normal Chapter Reader View */
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-900 to-slate-900 p-6 md:p-8 rounded-2xl text-white shadow-sm relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-xs font-mono font-bold tracking-widest text-indigo-300 uppercase">
                  Chapter {selectedChapter.number}
                </span>
                <h1 className="text-xl md:text-2xl font-bold tracking-tight mt-1">
                  {selectedChapter.title}
                </h1>
                {selectedChapter.description && (
                  <p className="text-xs md:text-sm text-indigo-100/80 mt-2 max-w-2xl leading-relaxed">
                    {selectedChapter.description}
                  </p>
                )}
              </div>
              <div className="absolute right-0 bottom-0 opacity-10 scale-150 rotate-12 pointer-events-none">
                <BookOpen className="w-48 h-48" />
              </div>
            </div>

            {/* Render Chapter Sections */}
            <div className="space-y-6">
              {selectedChapter.sections.map((sec) => (
                <div
                  id={sec.id}
                  key={sec.id}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4 hover:border-slate-200 transition-colors"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-4 bg-indigo-600 rounded-full"></div>
                      <h2 className="text-md font-bold text-slate-800 tracking-tight">
                        {sec.title}
                      </h2>
                    </div>
                    <div className="flex items-center gap-2">
                      {sec.page && (
                        <span className="text-[11px] font-mono font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                          Page {sec.page}
                        </span>
                      )}
                      <button
                        onClick={() => copyToClipboard(sec)}
                        className={`p-1.5 rounded-lg border transition-colors ${
                          copiedSectionId === sec.id
                            ? "bg-green-50 border-green-200 text-green-600"
                            : "border-slate-150 hover:bg-slate-50 text-slate-400 hover:text-slate-600"
                        }`}
                        title="Copy text to clipboard"
                      >
                        {copiedSectionId === sec.id ? (
                          <Check className="w-3.5 h-3.5" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4 text-slate-700 leading-relaxed text-sm text-justify">
                    {sec.content.map((paragraph, pIdx) => (
                      <p key={pIdx} className="indent-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
