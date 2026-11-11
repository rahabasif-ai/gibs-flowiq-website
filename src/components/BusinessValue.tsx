import React from 'react';
import { BUSINESS_VALUES } from '../data/mockData';
import { Eye, Layers, Clock, ShoppingCart, FileSpreadsheet, Truck, Check } from 'lucide-react';

export const BusinessValue: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Eye className="w-5 h-5 text-[#1769AA]" />;
      case 1: return <Layers className="w-5 h-5 text-[#318CE7]" />;
      case 2: return <Clock className="w-5 h-5 text-rose-600" />;
      case 3: return <ShoppingCart className="w-5 h-5 text-[#20A89A]" />;
      case 4: return <FileSpreadsheet className="w-5 h-5 text-[#1769AA]" />;
      case 5: return <Truck className="w-5 h-5 text-[#142B45]" />;
      default: return <Eye className="w-5 h-5 text-[#1769AA]" />;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1769AA] uppercase tracking-wider mb-2">
            <span>Operational Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight mb-4">
            From Business Data to Better Decisions
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            By shifting from retroactive accounting to proactive algorithmic forecasting, food manufacturing leaders and distribution supervisors can eliminate common friction points across production lines and warehouse depots.
          </p>
        </div>

        {/* 6 Business Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_VALUES.map((val, idx) => (
            <div
              key={val.title}
              className="p-6 rounded-2xl bg-[#F4F8FC] border border-slate-200/80 hover:bg-white hover:border-[#1769AA]/40 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
                    {getIcon(idx)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    Objective 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#142B45] mb-2">
                  {val.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                  {val.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">{val.metricLabel}:</span>
                <span className="font-semibold text-[#1769AA]">{val.metricDetail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
