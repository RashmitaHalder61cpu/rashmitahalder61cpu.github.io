import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { cn } from '../utils/cn';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for subtle shadow & active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = portfolioData.navigation.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const topOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-[#F9F8F6]/95 backdrop-blur-md border-b border-[#E5E0D8] shadow-[0_2px_12px_rgba(20,20,19,0.03)]'
          : 'bg-[#F9F8F6] border-b border-[#E5E0D8]/60'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-[#D9480F] rounded-md px-1 py-1"
            aria-label="Rashmita Halder - Return to top"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#141413] group-hover:text-[#D9480F] transition-colors">
              Rashmita Halder
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9480F]" aria-hidden="true" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {portfolioData.navigation.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    'px-3.5 py-1.5 text-sm font-medium rounded-md transition-all duration-150',
                    'focus-visible:ring-2 focus-visible:ring-[#D9480F]',
                    isActive
                      ? 'text-[#D9480F] bg-[#FDF3EE] font-semibold'
                      : 'text-[#6B6862] hover:text-[#141413] hover:bg-[#F2EFE9]'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center gap-2 pl-4 border-l border-[#E5E0D8]">
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#6B6862] hover:text-[#141413] hover:bg-[#F2EFE9] rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-[#D9480F]"
              aria-label="GitHub Profile of Rashmita Halder (opens in new tab)"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#6B6862] hover:text-[#141413] hover:bg-[#F2EFE9] rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-[#D9480F]"
              aria-label="LinkedIn Profile of Rashmita Halder (opens in new tab)"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#141413] hover:bg-[#F2EFE9] focus-visible:ring-2 focus-visible:ring-[#D9480F] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bg-[#F9F8F6] border-b border-[#E5E0D8] shadow-lg animate-in fade-in duration-200">
          <div className="max-w-6xl mx-auto px-4 py-6 space-y-4">
            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              {portfolioData.navigation.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      'px-4 py-3 rounded-lg text-base font-medium transition-colors flex items-center justify-between',
                      isActive
                        ? 'text-[#D9480F] bg-[#FDF3EE] font-semibold'
                        : 'text-[#141413] hover:bg-[#F2EFE9]'
                    )}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#D9480F]" />
                    )}
                  </a>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-[#E5E0D8] flex items-center justify-around gap-3">
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-[#141413] bg-[#FFFFFF] border border-[#E5E0D8] hover:border-[#D9480F]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#6B6862]" />
              </a>
              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-[#141413] bg-[#FFFFFF] border border-[#E5E0D8] hover:border-[#D9480F]"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#6B6862]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
