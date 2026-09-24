import React from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { cn } from '../utils/cn';

export default function ProjectCard({ project, index }) {
  return (
    <article
      className={cn(
        'group bg-[#FFFFFF] rounded-2xl border border-[#E5E0D8]',
        'transition-all duration-300 hover:border-[#D9480F]/50 hover:shadow-[0_12px_32px_-16px_rgba(20,20,19,0.08)]',
        'p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden'
      )}
    >
      {/* Top subtle editorial accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D9480F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Header: Project Index & Subtitle */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-[#D9480F]">
              PROJ-0{index + 1}
            </span>
            <span className="text-[#C8C2B7]" aria-hidden="true">•</span>
            <span className="text-xs font-medium text-[#6B6862] tracking-wide">
              {project.subtitle}
            </span>
          </div>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on Rashmita's GitHub profile (opens in new tab)`}
            className="p-2 rounded-lg text-[#6B6862] hover:text-[#D9480F] hover:bg-[#FDF3EE] transition-colors focus-visible:ring-2 focus-visible:ring-[#D9480F]"
            title="View code on GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#141413] font-serif group-hover:text-[#D9480F] transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base text-[#6B6862] leading-relaxed">
          {project.description}
        </p>

        {/* Technical Highlights / Capabilities */}
        {project.capabilities && (
          <div className="mt-6 pt-5 border-t border-[#F0ECE4]">
            <h4 className="text-xs font-mono font-medium uppercase tracking-wider text-[#8C8880] mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#D9480F]" />
              Implementation Highlights
            </h4>
            <ul className="space-y-2">
              {project.capabilities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4D4B46]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9480F] mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer: Tech stack pills & GitHub CTA */}
      <div className="mt-8 pt-6 border-t border-[#F0ECE4] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-wrap items-center gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#F4F1EB] text-[#4D4B46] border border-[#E5E0D8]"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#D9480F] hover:text-[#C03E0C] group/link transition-colors focus-visible:ring-2 focus-visible:ring-[#D9480F] rounded py-1"
          aria-label={`Explore ${project.title} repository on GitHub (opens in new tab)`}
        >
          <span>View on GitHub</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      </div>
    </article>
  );
}
