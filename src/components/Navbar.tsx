import React, { useState, useEffect } from 'react';
import { Layers, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onExploreDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onExploreDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Industry Context', href: '#industry' },
    { label: 'Challenges', href: '#challenges' },
    { label: 'Solution', href: '#solution' },
    { label: 'Features', href: '#features' },
    { label: 'Interactive Demo', href: '#demo' },
    { label: 'Technology', href: '#technology' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#demo') {
      onExploreDemo();
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3.5'
          : 'bg-white/80 backdrop-blur-xs border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly compliant Top Bar Contract: 3 zones separated by gap-8 */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#overview"
            className="flex items-center gap-2.5 text-[#142B45] hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 group"
          >
            <div className="w-9 h-9 rounded-lg bg-[#1769AA] flex items-center justify-center text-white shadow-xs group-hover:bg-[#125387] transition-colors">
              <Layers className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-[#142B45] leading-none">
                GIBS Flow<span className="text-[#318CE7]">IQ</span>
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-wide uppercase mt-0.5">
                Food Supply Intelligence
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (single-line, clean typography) */}
          <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#1769AA] transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onExploreDemo}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#1769AA] hover:bg-[#13568c] active:bg-[#0f4470] rounded-lg transition-colors shadow-xs whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Explore Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#1769AA] hover:bg-[#F4F8FC] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onExploreDemo();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#1769AA] hover:bg-[#13568c] rounded-lg transition-colors cursor-pointer"
              >
                <span>Explore Interactive Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
