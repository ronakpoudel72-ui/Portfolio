import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onResumeClick?: () => void;
}

export default function Navbar({ activeSection, onResumeClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'What I Do', href: '#what-i-do' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Activities', href: '#volunteer' },
    { name: 'References', href: '#references' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-stone-50/90 backdrop-blur-md border-b border-stone-200/80 shadow-xs py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-2.5 text-zinc-900 focus:outline-none"
        >
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight text-zinc-900 text-sm sm:text-base leading-tight group-hover:text-zinc-700 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs text-zinc-600 hidden sm:inline-block font-mono">
              IT & QA • Nepal
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'text-zinc-900 bg-stone-200/70 font-semibold'
                    : 'text-zinc-700 hover:text-zinc-900 hover:bg-stone-200/50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-2.5">
          {onResumeClick && (
            <button
              type="button"
              onClick={onResumeClick}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-700 hover:text-zinc-900 hover:bg-stone-200/70 border border-stone-300 transition-colors"
            >
              <span>View Resume / CV</span>
            </button>
          )}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-zinc-900 text-stone-50 hover:bg-zinc-800 transition-colors shadow-xs"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          id="mobile-menu-toggle-btn"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-zinc-700 hover:text-zinc-900 hover:bg-stone-200/60 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden bg-stone-50 border-b border-stone-200 px-4 pt-3 pb-5 shadow-lg space-y-1 animate-in slide-in-from-top-2 duration-150"
        >
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider px-3 py-1">
            Navigation
          </div>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'text-zinc-900 bg-stone-200 font-semibold'
                    : 'text-zinc-700 hover:text-zinc-900 hover:bg-stone-100'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-3 border-t border-stone-200 mt-2 space-y-2">
            {onResumeClick && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onResumeClick();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold bg-stone-100 text-zinc-800 border border-stone-300 hover:bg-stone-200 transition-colors"
              >
                <span>View Full Resume / CV</span>
              </button>
            )}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold bg-zinc-900 text-stone-50 hover:bg-zinc-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Ronak</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
