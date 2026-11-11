import React from 'react';
import { TECH_STACK } from '../data/mockData';
import { Code2, Server, Database, BrainCircuit, LineChart, Sparkles, GitBranch, Shield } from 'lucide-react';

export const TechStack: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-[#1769AA]" />;
      case 'Server': return <Server className="w-5 h-5 text-[#318CE7]" />;
      case 'Database': return <Database className="w-5 h-5 text-[#20A89A]" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-[#1769AA]" />;
      case 'LineChart': return <LineChart className="w-5 h-5 text-[#318CE7]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#20A89A]" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-[#142B45]" />;
      default: return <Code2 className="w-5 h-5 text-[#1769AA]" />;
    }
  };

  return (
    <section id="technology" className="py-20 bg-[#F4F8FC] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1769AA] uppercase tracking-wider mb-2">
            <span>Engineering Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight mb-4">
            Technology Stack &amp; Roadmap
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            GIBS FlowIQ is architected with modern, modular software engineering practices to ensure high responsiveness, reliable statistical computations, and painless integration into existing food manufacturing ERP workflows.
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_STACK.map((tech) => (
            <div
              key={tech.technology}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm hover:border-[#1769AA]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#F4F8FC] border border-slate-200/70">
                    {getIcon(tech.icon)}
                  </div>
                  <span className="text-[11px] font-mono font-medium text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
                    {tech.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#142B45] mb-1">
                  {tech.technology}
                </h3>

                <div className="text-xs font-semibold text-[#1769AA] mb-3">
                  Status: {tech.status}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {tech.role}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                <Shield className="w-3.5 h-3.5 text-[#20A89A]" />
                <span>Enterprise Grade Architecture</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
