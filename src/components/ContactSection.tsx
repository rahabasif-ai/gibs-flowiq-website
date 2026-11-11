import React, { useState } from 'react';
import { Mail, Building, User, Send, CheckCircle2, MessageSquare, AlertCircle, Copy, Check } from 'lucide-react';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    organization: '',
    email: '',
    department: 'Supply Chain & Logistics',
    interestType: 'Operational Problem Discussion',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<null | {
    referenceId: string;
    timestamp: string;
    data: ContactFormData;
  }>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.organization.trim()) {
      newErrors.organization = 'Company or organization name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Work email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide at least 10 characters detailing your inquiry';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate prototype validation and structured logging
    setTimeout(() => {
      const generatedRef = `FLOWIQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionSuccess({
        referenceId: generatedRef,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        data: { ...formData },
      });
      setIsSubmitting(false);
    }, 600);
  };

  const handleCopyRef = () => {
    if (submissionSuccess?.referenceId) {
      navigator.clipboard.writeText(submissionSuccess.referenceId);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2000);
    }
  };

  const handleReset = () => {
    setSubmissionSuccess(null);
    setFormData({
      fullName: '',
      organization: '',
      email: '',
      department: 'Supply Chain & Logistics',
      interestType: 'Operational Problem Discussion',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 bg-[#F4F8FC] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1769AA] uppercase tracking-wider mb-2">
              <span>Industry Collaboration &amp; Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight mb-4">
              Let&apos;s Explore Smarter Food Distribution.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We welcome dialogue with food manufacturers, logistics planners, and distribution leaders to refine predictive algorithms against real-world warehouse challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Scope of Collaboration */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
                <h3 className="text-sm font-bold text-[#142B45] mb-3 uppercase tracking-wider">
                  Open Collaboration Channels:
                </h3>
                <ul className="space-y-3 text-xs text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#20A89A] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-800">Industry Feedback:</strong> Critiques from supply chain officers and plant operations managers.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#20A89A] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-800">Operational Problem Discussions:</strong> Sharing distribution pain points across FMCG categories.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#20A89A] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-800">Technical Collaboration:</strong> Machine learning benchmarking and feature engineering insights.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#20A89A] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-800">Prototype Demonstrations:</strong> Walkthrough of demand modeling algorithms and reorder calculations.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#20A89A] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-800">Potential Pilot Opportunities:</strong> Exploratory, non-binding test runs on anonymized historical dispatch logs.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-500 flex items-start gap-2.5 shadow-2xs">
                <AlertCircle className="w-4 h-4 text-[#1769AA] shrink-0 mt-0.5" />
                <span>
                  All shared inquiries are treated with strict confidentiality. Direct inquiries can also be routed to Rahab Asif via project channels.
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Form or Success State */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
              {submissionSuccess ? (
                <div className="py-4 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#142B45]">
                      Inquiry Record Prepared Successfully
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                      Your inquiry details have been validated by the prototype form. Because this is a demonstration environment, a local confirmation ticket has been generated below.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F4F8FC] border border-slate-200/80 text-left space-y-2 text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
                      <span className="font-semibold text-slate-500">Ticket Reference:</span>
                      <div className="flex items-center gap-1.5 font-mono font-bold text-[#1769AA]">
                        <span>{submissionSuccess.referenceId}</span>
                        <button
                          type="button"
                          onClick={handleCopyRef}
                          className="p-1 hover:bg-slate-200 rounded transition-colors text-slate-500"
                          title="Copy Reference"
                        >
                          {copiedRef ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <span className="text-slate-500">Sender: </span>
                      <span className="font-medium text-slate-800">{submissionSuccess.data.fullName} ({submissionSuccess.data.organization})</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Department: </span>
                      <span className="font-medium text-slate-800">{submissionSuccess.data.department}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Contact: </span>
                      <span className="font-medium text-slate-800">{submissionSuccess.data.email}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2 text-xs font-semibold text-[#1769AA] bg-[#F4F8FC] hover:bg-[#e8f1fa] border border-slate-200 rounded-lg transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Tariq Mehmood"
                          className={`w-full px-3 py-2 text-xs rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1769AA]/20 ${
                            errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                          }`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-600 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Organization */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Organization / Company *
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Continental Food Industries"
                        className={`w-full px-3 py-2 text-xs rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1769AA]/20 ${
                          errors.organization ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                        }`}
                      />
                      {errors.organization && (
                        <p className="text-[11px] text-rose-600 mt-1">{errors.organization}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Professional Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Professional Work Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tariq@company.com"
                        className={`w-full px-3 py-2 text-xs rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1769AA]/20 ${
                          errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Department */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Department
                      </label>
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1769AA]/20"
                      >
                        <option value="Supply Chain & Logistics">Supply Chain &amp; Logistics</option>
                        <option value="Plant & Operations Management">Plant &amp; Operations Management</option>
                        <option value="Sales & Distribution Planning">Sales &amp; Distribution Planning</option>
                        <option value="Executive & Strategy">Executive &amp; Strategy</option>
                        <option value="Academic & Technical Research">Academic &amp; Technical Research</option>
                        <option value="Other">Other Department</option>
                      </select>
                    </div>
                  </div>

                  {/* Collaboration Intent */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Primary Subject of Interest
                    </label>
                    <select
                      value={formData.interestType}
                      onChange={(e) => setFormData({ ...formData, interestType: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1769AA]/20"
                    >
                      <option value="Operational Problem Discussion">Operational Problem Discussion</option>
                      <option value="Prototype Walkthrough Request">Prototype Walkthrough Request</option>
                      <option value="Industry & Algorithmic Feedback">Industry &amp; Algorithmic Feedback</option>
                      <option value="Technical Collaboration">Technical Collaboration</option>
                      <option value="Exploratory Pilot Inquiry">Exploratory Pilot Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Message / Operational Context *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your operational context, category dynamics, or questions regarding GIBS FlowIQ..."
                      className={`w-full px-3 py-2 text-xs rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1769AA]/20 ${
                        errors.message ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-600 mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#1769AA] hover:bg-[#125387] active:bg-[#0d3f66] rounded-xl transition-all shadow-xs disabled:opacity-60 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Validating Submission...' : 'Transmit Collaboration Inquiry'}</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    Prototype form validation only. Transmissions are safely verified and logged locally for demonstration.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
