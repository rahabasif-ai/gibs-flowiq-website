import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, AlertTriangle, Clock, Layers, ArrowUpRight, BarChart2 } from 'lucide-react';

interface HeroProps {
  onExplorePlatform: () => void;
  onViewDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePlatform, onViewDemo }) => {
  return (
    <section id="overview" className="relative pt-12 pb-20 overflow-hidden bg-white">
      {/* Subtle atmospheric background mesh */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[520px] bg-gradient-to-b from-[#F4F8FC] via-[#F4F8FC]/50 to-white rounded-full blur-3xl opacity-80" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-[#318CE7]/5 rounded-full blur-2xl" />
        <div className="absolute top-20 left-10 w-80 h-80 bg-[#20A89A]/5 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header Content */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full bg-[#F4F8FC] border border-[#1769AA]/15 text-[#1769AA] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#318CE7]" />
            <span>AI-POWERED FOOD DISTRIBUTION INTELLIGENCE</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#142B45] tracking-tight leading-[1.12] mb-6 text-balance">
            Make Smarter Decisions Across Your Food Supply Chain.
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
            GIBS FlowIQ is a proposed intelligent business platform designed to help food manufacturers and distributors understand product demand, monitor inventory, identify potential expiry risks and make better replenishment decisions through data-driven insights.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
            <button
              onClick={onExplorePlatform}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#1769AA] hover:bg-[#125387] active:bg-[#0d3f66] rounded-xl transition-all shadow-sm hover:shadow cursor-pointer"
            >
              <span>Explore Platform</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onViewDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#142B45] bg-[#F4F8FC] hover:bg-[#e8f1fa] border border-slate-200/90 rounded-xl transition-all shadow-2xs cursor-pointer"
            >
              <BarChart2 className="w-4 h-4 text-[#1769AA]" />
              <span>View Live Demo</span>
            </button>
          </div>

          {/* Developer Credit */}
          <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
            <span>Concept &amp; Prototype by Rahab Asif</span>
            <span aria-hidden="true">·</span>
            <span>BS Artificial Intelligence Student</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#1769AA]">Independent Software Research</span>
          </div>
        </div>

        {/* Hero Dashboard Preview Card */}
        <div className="relative mx-auto max-w-6xl">
          {/* Card Border & Wrapper */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-3 sm:p-5 shadow-lg shadow-slate-900/5 ring-1 ring-slate-900/5 overflow-hidden">
            {/* Window bar */}
            <div className="flex flex-wrap items-center justify-between pb-3.5 mb-4 border-b border-slate-100 gap-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                </div>
                <span className="text-xs font-semibold text-slate-700 ml-2">
                  GIBS FlowIQ Operations Console
                </span>
                <span className="hidden md:inline text-xs text-slate-400 font-normal">
                  — FMCG Distribution Intelligence
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-slate-500 bg-[#F4F8FC] border border-slate-200/60 rounded px-2 py-0.5">
                  Illustrative Demonstration Data
                </span>
              </div>
            </div>

            {/* Dashboard Quick Stat Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
              {/* Stat 1: Total Products */}
              <div className="p-3.5 rounded-xl bg-[#F4F8FC]/80 border border-slate-100 flex flex-col justify-between">
                <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
                  <span>Total SKUs</span>
                  <Layers className="w-3.5 h-3.5 text-[#1769AA]" />
                </div>
                <div className="text-xl font-bold font-mono text-[#142B45] tabular-nums">70 SKUs</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Across 5 FMCG Lines</div>
              </div>

              {/* Stat 2: Inventory Overview */}
              <div className="p-3.5 rounded-xl bg-[#F4F8FC]/80 border border-slate-100 flex flex-col justify-between">
                <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
                  <span>Total Inventory</span>
                  <TrendingUp className="w-3.5 h-3.5 text-[#20A89A]" />
                </div>
                <div className="text-xl font-bold font-mono text-[#142B45] tabular-nums">120,600</div>
                <div className="text-[11px] text-emerald-700 font-medium mt-0.5">5 Regional Hubs</div>
              </div>

              {/* Stat 3: Demand Forecast */}
              <div className="p-3.5 rounded-xl bg-[#F4F8FC]/80 border border-slate-100 flex flex-col justify-between">
                <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
                  <span>14-Day Demand</span>
                  <TrendingUp className="w-3.5 h-3.5 text-[#318CE7]" />
                </div>
                <div className="text-xl font-bold font-mono text-[#1769AA] tabular-nums">67,800</div>
                <div className="text-[11px] text-slate-500 mt-0.5">AI Projections</div>
              </div>

              {/* Stat 4: Low-Stock Alerts */}
              <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/60 flex flex-col justify-between">
                <div className="flex items-center justify-between text-amber-800 text-xs mb-1">
                  <span>Low Stock Alerts</span>
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                </div>
                <div className="text-xl font-bold font-mono text-amber-900 tabular-nums">3 SKUs</div>
                <div className="text-[11px] text-amber-700 mt-0.5">Below Safety Stock</div>
              </div>

              {/* Stat 5: Expiry Risk */}
              <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200/60 flex flex-col justify-between">
                <div className="flex items-center justify-between text-rose-800 text-xs mb-1">
                  <span>Expiry Watch</span>
                  <Clock className="w-3.5 h-3.5 text-rose-600" />
                </div>
                <div className="text-xl font-bold font-mono text-rose-900 tabular-nums">2 Batches</div>
                <div className="text-[11px] text-rose-700 mt-0.5">&lt; 30 Days Left</div>
              </div>

              {/* Stat 6: Sales Trends */}
              <div className="p-3.5 rounded-xl bg-[#F4F8FC]/80 border border-slate-100 flex flex-col justify-between">
                <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
                  <span>Fulfillment Rate</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#20A89A]" />
                </div>
                <div className="text-xl font-bold font-mono text-[#20A89A] tabular-nums">96.2%</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Dispatched on Schedule</div>
              </div>
            </div>

            {/* Simulated Live Trend Visual Banner */}
            <div className="bg-gradient-to-r from-[#142B45] to-[#1769AA] rounded-xl p-4 sm:p-5 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#318CE7]">
                    Intelligent Forecasting Snapshot
                  </span>
                  <span className="text-slate-400 text-xs">·</span>
                  <span className="text-slate-300 text-xs">Central Hub Lahore &amp; South Karachi</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  Anticipated 14.8% Weekend Surge across Savory Crisps &amp; Biscuits
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-xl">
                  Machine learning model detects strong correlation between Friday promotional dispatch cycles and retail replenishment velocity. Recommending priority dispatch for 4,200 cartons.
                </p>
              </div>

              <button
                onClick={onViewDemo}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#142B45] bg-white hover:bg-slate-100 rounded-lg transition-colors shrink-0 shadow-xs cursor-pointer"
              >
                <span>Open Full Interactive Console</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#1769AA]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
