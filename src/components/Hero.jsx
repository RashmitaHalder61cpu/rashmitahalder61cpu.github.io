import React from 'react';
import { ArrowDown, ArrowUpRight, Code2, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#E5E0D8]/60 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Status / Academic Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E5E0D8] text-xs font-mono text-[#6B6862]">
              <span className="w-2 h-2 rounded-full bg-[#D9480F] animate-pulse" />
              <span>{portfolioData.personal.badge}</span>
            </div>

            {/* Dominant Editorial Name & Role */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#141413] font-serif leading-[1.08]">
                {portfolioData.personal.name}
              </h1>
              <p className="text-lg sm:text-2xl font-medium text-[#D9480F] tracking-tight">
                {portfolioData.personal.title}
              </p>
            </div>

            {/* Authentic Introduction */}
            <p className="text-base sm:text-lg lg:text-xl text-[#4D4B46] leading-relaxed max-w-2xl font-normal">
              {portfolioData.personal.heroIntro}
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Primary CTA */}
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#D9480F] text-[#FFFFFF] text-sm font-semibold shadow-sm hover:bg-[#C03E0C] active:scale-[0.98] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#D9480F]"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Secondary CTA: GitHub */}
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#FFFFFF] border border-[#E5E0D8] text-sm font-semibold text-[#141413] hover:border-[#D9480F] hover:text-[#D9480F] hover:bg-[#FDF3EE] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#D9480F]"
                aria-label="GitHub profile of Rashmita Halder (opens in new tab)"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#6B6862]" />
              </a>

              {/* LinkedIn CTA */}
              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#FFFFFF] border border-[#E5E0D8] text-sm font-semibold text-[#141413] hover:border-[#D9480F] hover:text-[#D9480F] hover:bg-[#FDF3EE] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#D9480F]"
                aria-label="LinkedIn profile of Rashmita Halder (opens in new tab)"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#6B6862]" />
              </a>
            </div>
          </div>

          {/* Editorial Metadata / Snapshot Sidebar (No photo, pure typography & structure) */}
          <div className="lg:col-span-4 lg:pt-2">
            <div className="bg-[#FFFFFF] border border-[#E5E0D8] rounded-2xl p-6 sm:p-7 shadow-[0_8px_30px_rgba(20,20,19,0.03)] space-y-6">
              
              <div className="border-b border-[#F0ECE4] pb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#8C8880]">
                  Academic Profile
                </span>
                <h3 className="mt-1 text-base font-semibold text-[#141413]">
                  Computer Science &amp; Engineering
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#8C8880] block mb-1">
                    Institution
                  </span>
                  <p className="font-medium text-[#141413]">REVA University</p>
                  <p className="text-xs text-[#6B6862] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#D9480F]" />
                    Bengaluru, Karnataka
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#8C8880] block mb-1">
                    Current Semester / Stage
                  </span>
                  <p className="font-medium text-[#141413]">2nd Year Undergraduate</p>
                </div>

                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#8C8880] block mb-1">
                    Primary Interests
                  </span>
                  <p className="text-[#4D4B46]">
                    C Systems Programming, Data Structures, Algorithmic Problem Solving, Web Standards
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F0ECE4] flex items-center gap-2 text-xs text-[#6B6862]">
                <Code2 className="w-4 h-4 text-[#D9480F]" />
                <span>Actively writing code &amp; building projects</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
