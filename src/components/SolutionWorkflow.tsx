import React, { useState } from 'react';
import { WORKFLOW_STAGES } from '../data/mockData';
import { Database, Cpu, TrendingUp, ShieldAlert, ArrowRightLeft, LayoutDashboard, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

export const SolutionWorkflow: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState(WORKFLOW_STAGES[2].id); // AI Forecasting as initial focus
  const activeStage = WORKFLOW_STAGES.find((s) => s.id === activeStageId) || WORKFLOW_STAGES[0];

  const getStageIcon = (name: string) => {
    switch (name) {
      case 'Database': return <Database className="w-5 h-5 text-[#1769AA]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#318CE7]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#1769AA]" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-amber-600" />;
      case 'ArrowRightLeft': return <ArrowRightLeft className="w-5 h-5 text-[#20A89A]" />;
      case 'LayoutDashboard': return <LayoutDashboard className="w-5 h-5 text-[#142B45]" />;
      default: return <Database className="w-5 h-5 text-[#1769AA]" />;
    }
  };

  return (
    <section id="solution" className="py-20 bg-[#F4F8FC] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1769AA] uppercase tracking-wider mb-2">
            <span>Proposed Architecture &amp; Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight mb-4">
            Introducing GIBS FlowIQ
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            A cohesive pipeline connecting raw sales dispatches to predictive algorithms and executive distribution consoles. Designed to replace fragmented spreadsheets with continuous, closed-loop supply intelligence.
          </p>
        </div>

        {/* Visual Workflow Pipeline Stepper */}
        <div className="mb-10 bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-6 shadow-sm overflow-x-auto">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
            End-to-End Operational Pipeline (Click any step to inspect):
          </div>

          <div className="flex items-center justify-between min-w-[760px] gap-2">
            {WORKFLOW_STAGES.map((stage, idx) => {
              const isCurrent = stage.id === activeStageId;
              return (
                <React.Fragment key={stage.id}>
                  <button
                    onClick={() => setActiveStageId(stage.id)}
                    className={`flex-1 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-[#1769AA] text-white border-[#1769AA] shadow-xs'
                        : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-mono font-bold ${isCurrent ? 'text-blue-100' : 'text-slate-400'}`}>
                        {stage.stepNumber}
                      </span>
                      <div className={`p-1.5 rounded-lg ${isCurrent ? 'bg-white/20 text-white' : 'bg-[#F4F8FC] text-[#1769AA]'}`}>
                        {getStageIcon(stage.iconName)}
                      </div>
                    </div>
                    <div className={`text-xs font-bold leading-tight line-clamp-2 ${isCurrent ? 'text-white' : 'text-[#142B45]'}`}>
                      {stage.title}
                    </div>
                  </button>

                  {idx < WORKFLOW_STAGES.length - 1 && (
                    <div className="px-1 text-slate-300 shrink-0">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Selected Step Inspector Box */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1769AA] mb-1">
                <span>Stage {activeStage.stepNumber} Deep Dive</span>
                <span className="text-slate-300">·</span>
                <span className="text-slate-500">Pipeline Ingestion &amp; Logic</span>
              </div>
              <h3 className="text-2xl font-bold text-[#142B45]">
                {activeStage.title}
              </h3>
            </div>
            <p className="text-xs text-slate-600 max-w-lg">
              {activeStage.shortDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1: Inputs */}
            <div className="p-4 rounded-xl bg-[#F4F8FC] border border-slate-200/70">
              <div className="text-xs font-bold text-[#142B45] uppercase tracking-wider mb-3 flex items-center gap-2">
                <Database className="w-3.5 h-3.5 text-[#1769AA]" />
                <span>Primary Data Ingestion</span>
              </div>
              <ul className="space-y-2">
                {activeStage.inputs.map((inp) => (
                  <li key={inp} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#20A89A] shrink-0 mt-0.5" />
                    <span>{inp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Algorithmic Logic */}
            <div className="p-4 rounded-xl bg-[#F4F8FC] border border-slate-200/70">
              <div className="text-xs font-bold text-[#142B45] uppercase tracking-wider mb-3 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-[#318CE7]" />
                <span>Processing &amp; Algorithms</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {activeStage.processing}
              </p>
            </div>

            {/* Column 3: Generated Outputs */}
            <div className="p-4 rounded-xl bg-[#F4F8FC] border border-slate-200/70">
              <div className="text-xs font-bold text-[#142B45] uppercase tracking-wider mb-3 flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5 text-[#20A89A]" />
                <span>Downstream Deliverables</span>
              </div>
              <ul className="space-y-2">
                {activeStage.outputs.map((out) => (
                  <li key={out} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1769AA] shrink-0 mt-0.5" />
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
