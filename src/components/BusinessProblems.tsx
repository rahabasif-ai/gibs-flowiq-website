import React, { useState } from 'react';
import { BUSINESS_PROBLEMS } from '../data/mockData';
import { AlertCircle, ArrowRight, Eye, TrendingDown, Clock, RefreshCw, DatabaseZap, CheckCircle2 } from 'lucide-react';

export const BusinessProblems: React.FC = () => {
  const [activeProblemId, setActiveProblemId] = useState(BUSINESS_PROBLEMS[0].id);
  const activeProblem = BUSINESS_PROBLEMS.find((p) => p.id === activeProblemId) || BUSINESS_PROBLEMS[0];

  const problemIcons: Record<string, React.ReactNode> = {
    'prob-1': <TrendingDown className="w-5 h-5 text-[#1769AA]" />,
    'prob-2': <Eye className="w-5 h-5 text-[#318CE7]" />,
    'prob-3': <Clock className="w-5 h-5 text-rose-600" />,
    'prob-4': <RefreshCw className="w-5 h-5 text-amber-600" />,
    'prob-5': <DatabaseZap className="w-5 h-5 text-[#20A89A]" />,
  };

  return (
    <section id="challenges" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1769AA] uppercase tracking-wider mb-2">
            <span>Industry Problem Discovery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight mb-4">
            The Operational Challenges Behind Food Distribution
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            In food manufacturing, supply chains are squeezed between short shelf lives and high retail demand volatility. Investigating the root operational causes reveals five foundational distribution bottlenecks.
          </p>
        </div>

        {/* Framing Disclaimer */}
        <div className="mb-10 p-3.5 rounded-xl bg-[#F4F8FC] border border-slate-200/70 text-xs text-slate-600 flex items-center gap-2.5">
          <AlertCircle className="w-4 h-4 text-[#1769AA] shrink-0" />
          <span>
            <strong className="text-[#142B45]">Exploratory Research Note: </strong>
            These operational friction points are presented as broader FMCG industry challenges to investigate and solve with AI, not confirmed failures or internal issues at SM Foods.
          </span>
        </div>

        {/* 2-Column Problem & Solution Deep-Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: List of 5 Core Problems */}
          <div className="lg:col-span-5 space-y-3">
            {BUSINESS_PROBLEMS.map((prob, index) => {
              const isSelected = prob.id === activeProblemId;
              return (
                <button
                  key={prob.id}
                  onClick={() => setActiveProblemId(prob.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-[#F4F8FC] border-[#1769AA] shadow-xs ring-1 ring-[#1769AA]/20'
                      : 'bg-white border-slate-200/80 hover:bg-slate-50/80 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-white border border-slate-200/80 shrink-0 mt-0.5">
                      {problemIcons[prob.id]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-mono font-medium text-slate-400">
                          Challenge 0{index + 1}
                        </span>
                        {isSelected && (
                          <span className="text-[11px] font-semibold text-[#1769AA] bg-white border border-[#1769AA]/20 rounded px-2 py-0.5">
                            Selected
                          </span>
                        )}
                      </div>
                      <h3 className="text-sm font-bold text-[#142B45] truncate">
                        {prob.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {prob.subtitle}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Challenge Analysis Card */}
          <div className="lg:col-span-7 bg-[#F4F8FC] rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1769AA] uppercase tracking-wider mb-2">
              <span>Operational Analysis</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500 font-mono">Problem Dossier</span>
            </div>

            <h3 className="text-2xl font-bold text-[#142B45] mb-2">
              {activeProblem.title}
            </h3>
            <div className="text-sm font-semibold text-[#318CE7] mb-6">
              {activeProblem.subtitle}
            </div>

            {/* Problem Statement */}
            <div className="p-4 rounded-xl bg-white border border-slate-200/80 mb-5">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-500" />
                <span>The Industry Friction</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {activeProblem.problem}
              </p>
            </div>

            {/* Impact & Consequence */}
            <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200/70 mb-5">
              <div className="text-xs font-bold text-rose-900 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-rose-600" />
                <span>Commercial &amp; Operational Consequence</span>
              </div>
              <p className="text-xs text-rose-950 leading-relaxed font-medium">
                {activeProblem.impact}
              </p>
            </div>

            {/* FlowIQ Resolution */}
            <div className="p-4 rounded-xl bg-white border border-[#20A89A]/30">
              <div className="text-xs font-bold text-[#20A89A] uppercase tracking-wider mb-1.5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#20A89A]" />
                <span>The GIBS FlowIQ Proposed Intervention</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {activeProblem.flowiqApproach}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
