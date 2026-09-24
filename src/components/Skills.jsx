import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import SkillCard from './SkillCard';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Programming & Systems', 'Databases & Data', 'Web Fundamentals', 'Tools & Collaboration'];

  const filteredSkills =
    selectedCategory === 'All'
      ? portfolioData.skills
      : portfolioData.skills.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[#E5E0D8]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="02"
          title="Technical Skills"
          subtitle="Programming languages, web standards, and developer tools I actively use and study."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8" role="tablist" aria-label="Skill categories">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 focus-visible:ring-2 focus-visible:ring-[#D9480F] ${
                  isSelected
                    ? 'bg-[#141413] text-[#FFFFFF] font-semibold shadow-sm'
                    : 'bg-[#FFFFFF] text-[#6B6862] border border-[#E5E0D8] hover:border-[#D9480F]/40 hover:text-[#141413]'
                }`}
              >
                {cat}
                {cat === 'All' && (
                  <span className="ml-1.5 text-[10px] opacity-75 font-mono">
                    ({portfolioData.skills.length})
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

        {/* Honest Academic Footnote */}
        <div className="mt-10 p-4 rounded-xl bg-[#F4F1EB]/70 border border-[#E5E0D8] text-xs text-[#6B6862] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>
            <strong className="text-[#141413] font-medium">Academic &amp; Project Experience:</strong> All listed technologies are exercised through coursework, lab assignments, and personal coding projects.
          </span>
          <span className="font-mono text-[11px] text-[#8C8880]">
            No fabricated metrics
          </span>
        </div>
      </div>
    </section>
  );
}
