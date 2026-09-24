import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E5E0D8] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-[#F0ECE4]">
          
          {/* Brand & Title */}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl font-bold tracking-tight text-[#141413]">
                {portfolioData.personal.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9480F]" />
            </div>
            <p className="text-xs sm:text-sm text-[#6B6862] mt-1">
              {portfolioData.personal.title}
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-[#6B6862] hover:text-[#141413] hover:bg-[#F4F1EB] transition-colors focus-visible:ring-2 focus-visible:ring-[#D9480F]"
              aria-label="GitHub Profile of Rashmita Halder (opens in new tab)"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-[#6B6862] hover:text-[#141413] hover:bg-[#F4F1EB] transition-colors focus-visible:ring-2 focus-visible:ring-[#D9480F]"
              aria-label="LinkedIn Profile of Rashmita Halder (opens in new tab)"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${portfolioData.socials.email}`}
              className="p-2.5 rounded-lg text-[#6B6862] hover:text-[#141413] hover:bg-[#F4F1EB] transition-colors focus-visible:ring-2 focus-visible:ring-[#D9480F]"
              aria-label="Send email to Rashmita Halder"
              title="Email Rashmita Halder"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-[#6B6862] hover:text-[#141413] hover:bg-[#F4F1EB] transition-colors border border-[#E5E0D8] focus-visible:ring-2 focus-visible:ring-[#D9480F] cursor-pointer"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-[#8C8880] gap-4">
          <p>
            &copy; {currentYear} {portfolioData.personal.name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px]">
            Engineered with React 19 &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
