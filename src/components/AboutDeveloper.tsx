import React from 'react';
import { UserCheck, GraduationCap, Compass, Target, ArrowUpRight } from 'lucide-react';

interface AboutDeveloperProps {
  onContactClick: () => void;
}

export const AboutDeveloper: React.FC<AboutDeveloperProps> = ({ onContactClick }) => {
  return (
    <section id="about" className="py-20 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1769AA] uppercase tracking-wider mb-2">
              <span>Project Background &amp; Origins</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight mb-4">
              Built to Solve Real Industry Challenges.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              GIBS FlowIQ is an independent AI software development project focused on exploring practical applications of artificial intelligence in food manufacturing and distribution.
            </p>
          </div>

          {/* Clean Enterprise Developer Card */}
          <div className="bg-[#F4F8FC] rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Left Column: Profile Summary */}
              <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-slate-200/80 pb-6 md:pb-0 md:pr-6">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1769AA] to-[#318CE7] flex items-center justify-center text-white text-xl font-bold shadow-xs">
                    RA
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#142B45]">Rahab Asif</h3>
                    <div className="text-xs font-semibold text-[#1769AA] flex items-center gap-1.5 mt-0.5">
                      <GraduationCap className="w-4 h-4" />
                      <span>AI Engineer | AI Content Engineer | AI Entrepreneur</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-600 leading-relaxed">
                  Dedicated to applying artificial intelligence, machine learning, and scalable systems engineering to solve real-world industrial and commercial problems.
                </div>
              </div>

              {/* Right Column: Project Statement & Vision */}
              <div className="md:col-span-7 md:pl-2 space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-[#20A89A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                      Developer Purpose &amp; Vision
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      &ldquo;My goal is to apply artificial intelligence, machine learning and software engineering to solve real-world business problems.&rdquo;
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Compass className="w-5 h-5 text-[#1769AA] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                      Independent Research Boundary
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      FlowIQ was created independently to demonstrate how modern time-series forecasting, automated shelf-life triage, and consolidated inventory telemetry can streamline FMCG distribution networks.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onContactClick}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#1769AA] hover:text-[#125387] transition-colors cursor-pointer"
                  >
                    <span>Connect regarding feedback or research pilots</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
