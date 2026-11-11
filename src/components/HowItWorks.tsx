import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/mockData';
import { ArrowDown, CheckCircle } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-[#F4F8FC] border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1769AA] uppercase tracking-wider mb-2">
            <span>Operational Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight mb-4">
            How GIBS FlowIQ Works in Practice
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            From raw ERP dispatch logs to boardroom distribution visibility—a clear five-stage methodology designed for practical manufacturing operations.
          </p>
        </div>

        {/* Graphical 5-Step Workflow */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="relative bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:shadow transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Step Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-[#1769AA]/10 text-[#1769AA] font-mono font-bold text-xs flex items-center justify-center">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      Step {idx + 1} of 5
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-[#142B45] mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                  {step.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
