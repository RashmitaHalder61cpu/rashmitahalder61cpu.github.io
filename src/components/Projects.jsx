import React from 'react';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 border-b border-[#E5E0D8]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="03"
          title="Featured Projects"
          subtitle="Real software projects developed to explore systems programming, data structures, and algorithmic logic."
        />

        {/* Project Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub Repositories Link Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#E5E0D8] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-[#141413]">
              Looking for more code?
            </h3>
            <p className="text-sm text-[#6B6862]">
              Visit my GitHub profile to see all my repositories, commits, and practice solutions.
            </p>
          </div>

          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#141413] text-[#FFFFFF] text-sm font-semibold hover:bg-[#2C2B29] transition-colors focus-visible:ring-2 focus-visible:ring-[#D9480F] flex-shrink-0"
            aria-label="View Rashmita Halder's full GitHub repository profile (opens in new tab)"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Visit @RashmitaHalder61cpu</span>
            <ArrowUpRight className="w-4 h-4 text-[#C8C2B7]" />
          </a>
        </div>
      </div>
    </section>
  );
}
