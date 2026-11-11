import React from 'react';
import { Layers, ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-100">
          {/* Brand & Project Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#1769AA] flex items-center justify-center text-white">
                <Layers className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-[#142B45] tracking-tight">
                GIBS Flow<span className="text-[#318CE7]">IQ</span>
              </span>
            </div>

            <p className="text-sm font-medium text-slate-700 max-w-md">
              AI-Powered Demand Forecasting &amp; Intelligent Distribution Management System.
            </p>

            <p className="text-xs text-slate-500 max-w-md leading-relaxed">
              Intelligent Decisions. Smarter Distribution. Better Business Visibility. An independent applied machine learning prototype for the food manufacturing and distribution industry.
            </p>

            <div className="text-xs text-slate-600 font-medium pt-1">
              Developed as an independent project by <strong className="text-[#142B45]">Rahab Asif</strong> (BS Artificial Intelligence Student).
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <a href="#overview" className="hover:text-[#1769AA] transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#solution" className="hover:text-[#1769AA] transition-colors">
                  Solutions &amp; Pipeline
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#1769AA] transition-colors">
                  Core Features
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-[#1769AA] transition-colors">
                  Technology Stack
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-[#1769AA] transition-colors">
                  Interactive Demo
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#1769AA] transition-colors">
                  Contact &amp; Collaboration
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column: Independent Research Framework */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Project Classification
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Applied Artificial Intelligence Capstone &amp; Industrial Prototype. Designed to demonstrate practical machine learning utility in supply chain and distribution operations.
            </p>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#1769AA] transition-colors cursor-pointer"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Required Prominent Disclaimer Box */}
        <div className="mt-8 p-4 rounded-xl bg-[#F4F8FC] border border-slate-200/80 text-center">
          <p className="text-xs text-slate-600 leading-relaxed font-medium">
            <strong className="text-[#142B45]">Mandatory Independent Disclaimer: </strong>
            GIBS FlowIQ is an independent proposed software project. It is not affiliated with, endorsed by, or officially associated with SM Foods or GIBS Pakistan.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
          <div>
            &copy; {new Date().getFullYear()} GIBS FlowIQ. Independent Software Project by Rahab Asif. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Academic AI Research</span>
            <span>·</span>
            <span>Light Theme Enterprise Design</span>
            <span>·</span>
            <span>Prototype v0.8</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
