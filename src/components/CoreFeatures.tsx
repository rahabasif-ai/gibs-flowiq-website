import React from 'react';
import { CORE_FEATURES } from '../data/mockData';
import { TrendingUp, Package, Clock, Sparkles, Truck, BarChart3, Check } from 'lucide-react';

export const CoreFeatures: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#1769AA]" />;
      case 'Package': return <Package className="w-5 h-5 text-[#318CE7]" />;
      case 'Clock': return <Clock className="w-5 h-5 text-rose-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#20A89A]" />;
      case 'Truck': return <Truck className="w-5 h-5 text-[#1769AA]" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-[#142B45]" />;
      default: return <Sparkles className="w-5 h-5 text-[#1769AA]" />;
    }
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1769AA] uppercase tracking-wider mb-2">
            <span>Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight mb-4">
            Six Pillars of Distribution Intelligence
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            GIBS FlowIQ bridges demand forecasting with floor-level inventory tracking to keep FMCG goods moving steadily without depot stockouts or shelf-life expirations.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CORE_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="group p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-[#1769AA]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Icon & Subtitle */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#F4F8FC] border border-slate-200/70 flex items-center justify-center group-hover:bg-[#1769AA]/10 transition-colors">
                    {getIcon(feature.icon)}
                  </div>
                  <span className="text-[11px] font-medium text-slate-500 font-mono">
                    {feature.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#142B45] mb-2.5 group-hover:text-[#1769AA] transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {feature.description}
                </p>
              </div>

              {/* Bullet highlights */}
              <div className="pt-4 border-t border-slate-100">
                <ul className="space-y-2">
                  {feature.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-[#20A89A] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
