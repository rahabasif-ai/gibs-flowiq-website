import React, { useState } from 'react';
import { FOOD_CATEGORIES } from '../data/mockData';
import { Package, Clock, Truck, ShieldCheck, Info } from 'lucide-react';

export const IndustryShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(FOOD_CATEGORIES[0].id);
  const activeData = FOOD_CATEGORIES.find((c) => c.id === selectedCategory) || FOOD_CATEGORIES[0];

  return (
    <section id="industry" className="py-20 bg-[#F4F8FC] border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1769AA] uppercase tracking-wider mb-2">
            <span>FMCG Distribution Dynamics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight mb-4">
            Understanding the Food Manufacturing Industry
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Food manufacturing and fast-moving consumer goods (FMCG) distribution operate under tight shelf-life deadlines, variable regional retail turnover, and volatile order cycles. FlowIQ is engineered around the distinct physical and logistical properties of key food categories.
          </p>
        </div>

        {/* Case Study Context Notice */}
        <div className="mb-10 p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3.5">
          <Info className="w-5 h-5 text-[#1769AA] shrink-0 mt-0.5" />
          <div className="text-xs leading-relaxed text-slate-600">
            <span className="font-semibold text-[#142B45]">Proposed Solution for SM Foods (GIBS Pakistan): </span>
            GIBS FlowIQ is an independently developed AI-powered software proposal tailored to the product categories, warehousing hubs, and wholesale distribution logistics of SM Foods (GIBS Pakistan). All imagery, product mockups, and operational numbers shown are generic illustrative representations created for prototype evaluation. This project is an independent engineering proposal and does not claim official endorsement, partnership, or commercial adoption.
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {FOOD_CATEGORIES.map((cat) => {
            const isActive = cat.id === selectedCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#1769AA] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Active Category Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
          {/* Left Column: Commercial Product Visual */}
          <div className="lg:col-span-6 relative overflow-hidden rounded-xl bg-slate-100 border border-slate-200/60 aspect-4/3 group">
            <img
              src={activeData.imagePath}
              alt={activeData.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[11px] font-medium tracking-wide uppercase text-[#318CE7] block mb-1">
                {activeData.tag}
              </span>
              <h3 className="text-lg font-bold">{activeData.title}</h3>
            </div>
          </div>

          {/* Right Column: FMCG Operational Specifications */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1769AA] mb-2">
                <span>Category Supply Profile</span>
                <span className="text-slate-300">·</span>
                <span className="text-slate-500 font-mono">{activeData.skuCount} Catalog SKUs</span>
              </div>
              <h3 className="text-2xl font-bold text-[#142B45] mb-3">
                {activeData.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {activeData.description}
              </p>

              {/* FMCG Key Dynamics */}
              <div className="p-4 rounded-xl bg-[#F4F8FC] border border-slate-200/60 mb-6">
                <div className="text-xs font-bold text-[#142B45] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Package className="w-3.5 h-3.5 text-[#1769AA]" />
                  <span>Distribution Dynamics &amp; Constraints</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activeData.keyDynamics}
                </p>
              </div>

              {/* Logistical Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-lg border border-slate-200/80 bg-white">
                  <div className="flex items-center gap-1.5 text-slate-500 text-[11px] mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#318CE7]" />
                    <span>Lead Time</span>
                  </div>
                  <div className="text-sm font-bold font-mono text-[#142B45]">
                    {activeData.leadTimeVariance}
                  </div>
                </div>

                <div className="p-3 rounded-lg border border-slate-200/80 bg-white">
                  <div className="flex items-center gap-1.5 text-slate-500 text-[11px] mb-1">
                    <Truck className="w-3.5 h-3.5 text-[#20A89A]" />
                    <span>Turnover Velocity</span>
                  </div>
                  <div className="text-sm font-bold text-[#142B45]">
                    {activeData.turnoverVelocity}
                  </div>
                </div>

                <div className="p-3 rounded-lg border border-slate-200/80 bg-white col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-1.5 text-slate-500 text-[11px] mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#1769AA]" />
                    <span>Forecast Model</span>
                  </div>
                  <div className="text-sm font-bold text-[#142B45]">
                    XGBoost + Lag
                  </div>
                </div>
              </div>
            </div>

            {/* Sample SKUs in Category */}
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Simulated Line Products:
              </div>
              <div className="flex flex-wrap gap-2">
                {activeData.sampleSkus.map((sku) => (
                  <span
                    key={sku}
                    className="inline-flex items-center text-xs font-medium text-slate-700 bg-slate-100/90 border border-slate-200/60 rounded-md px-2.5 py-1"
                  >
                    {sku}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 5-Category Gallery Grid Below */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {FOOD_CATEGORIES.map((cat) => {
            const isCurrent = cat.id === selectedCategory;
            return (
              <div
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`group cursor-pointer rounded-xl bg-white border p-3 transition-all ${
                  isCurrent
                    ? 'border-[#1769AA] ring-2 ring-[#1769AA]/15 shadow-xs'
                    : 'border-slate-200/80 hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                <div className="aspect-4/3 rounded-lg overflow-hidden bg-slate-100 mb-2.5">
                  <img
                    src={cat.imagePath}
                    alt={cat.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-xs font-bold text-[#142B45] truncate">
                  {cat.title}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 font-mono">
                  {cat.skuCount} SKUs · {cat.turnoverVelocity}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
