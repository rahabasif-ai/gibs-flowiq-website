/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IndustryShowcase } from './components/IndustryShowcase';
import { BusinessProblems } from './components/BusinessProblems';
import { SolutionWorkflow } from './components/SolutionWorkflow';
import { CoreFeatures } from './components/CoreFeatures';
import { HowItWorks } from './components/HowItWorks';
import { DashboardPreview } from './components/DashboardPreview';
import { TechStack } from './components/TechStack';
import { BusinessValue } from './components/BusinessValue';
import { AboutDeveloper } from './components/AboutDeveloper';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#142B45] flex flex-col font-sans selection:bg-[#318CE7]/15 selection:text-[#1769AA]">
      {/* Sticky Enterprise Navigation Bar */}
      <Navbar onExploreDemo={() => scrollToSection('demo')} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Homepage Hero Section */}
        <Hero
          onExplorePlatform={() => scrollToSection('solution')}
          onViewDemo={() => scrollToSection('demo')}
        />

        {/* 2. Food Industry Visual Section */}
        <IndustryShowcase />

        {/* 3. Real Business Problem Section */}
        <BusinessProblems />

        {/* 4. Our Proposed Solution & Visual Workflow */}
        <SolutionWorkflow />

        {/* 5. Core Features Section */}
        <CoreFeatures />

        {/* 6. How It Works Section */}
        <HowItWorks />

        {/* 7. Interactive Dashboard Preview Section */}
        <DashboardPreview />

        {/* 8. Technology Stack Section */}
        <TechStack />

        {/* 9. Business Value Section */}
        <BusinessValue />

        {/* 10. About the Project & Developer */}
        <AboutDeveloper onContactClick={() => scrollToSection('contact')} />

        {/* 11. Contact & Collaboration Section */}
        <ContactSection />
      </main>

      {/* 12. Footer with Mandatory Disclaimers */}
      <Footer />
    </div>
  );
}
