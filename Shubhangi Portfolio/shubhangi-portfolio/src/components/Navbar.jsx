import React, { useState, useEffect } from 'react';
import { Palette, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar = ({ currentTheme, onCycleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Digital Journey', href: '#digital-journey' },
    { label: 'Interests', href: '#interests' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className={`sticky top-0 z-40 bg-[#F7F1E7]/90 backdrop-blur-md border-b border-[#D8C7B3]/40 transition-all duration-300 ${isScrolled ? 'shadow-sm' : ''}`}>
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Brand Monogram */}
          <a href="#home" className="group flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full border border-[#94745C]/50 flex items-center justify-center font-serif text-lg font-bold text-[#604333] bg-[#FAF6EF] group-hover:border-[#604333] transition-colors shadow-sm">
              SA
            </div>
            <div>
              <span className="block font-serif text-lg tracking-wide uppercase font-semibold text-[#17263D] group-hover:text-[#604333] transition-colors leading-tight">
                Shubhangi Aggarwal
              </span>
              <span className="block font-mono text-[10px] tracking-wider text-[#94745C] uppercase">
                Vol. 1 • 2026 Edition
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-[13px] tracking-wider uppercase font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#17263D]/80 hover:text-[#604333] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onCycleTheme}
              className="px-3 py-1.5 rounded-full border border-[#D8C7B3] hover:border-[#94745C] text-[#604333] bg-[#FAF6EF] hover:bg-[#FDFBF7] flex items-center gap-2 text-xs font-mono transition-all shadow-sm"
              title="Cycle Aesthetic Theme"
            >
              <Palette className="w-3.5 h-3.5" />
              <span>{currentTheme}</span>
            </button>

            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-[#17263D] hover:bg-[#604333] text-[#F7F1E7] text-xs font-medium tracking-wider uppercase transition-colors shadow-sm"
            >
              Let's Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-[#17263D] hover:text-[#604333]"
            aria-label="Open Navigation"
          >
            <Menu className="w-6 h-6" />
          </button>

        </div>
      </header>

      {/* Mobile Slide-over Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#17263D]/60 backdrop-blur-sm flex justify-end">
          <div className="w-4/5 max-w-sm h-full bg-[#F7F1E7] p-8 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#D8C7B3]/50">
                <div>
                  <p className="font-serif text-lg font-bold text-[#17263D]">Shubhangi Aggarwal</p>
                  <p className="font-mono text-[11px] text-[#94745C]">Personal Portfolio</p>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#604333]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col space-y-5 text-base tracking-wide">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#17263D] hover:text-[#604333] font-serif text-lg"
                  >
                    0{idx + 1}. {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-8 border-t border-[#D8C7B3]/50">
              <p className="font-mono text-xs text-[#94745C] mb-2">Direct Contact</p>
              <p className="text-sm font-medium text-[#17263D] mb-1">Phone: 9251025525</p>
              <p className="text-sm text-stone-600 mb-4">JECRC University • Jaipur</p>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-2.5 text-center rounded bg-[#17263D] text-[#F7F1E7] text-xs uppercase tracking-wider font-medium"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
