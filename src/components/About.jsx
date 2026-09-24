import React from 'react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Compass, Cpu, BookOpen } from 'lucide-react';

export default function About() {
  const learningPillars = [
    {
      icon: Cpu,
      title: 'Foundational Programming',
      description:
        'Focusing on low-level fundamentals in C—such as manual memory allocation, pointer manipulation, and string processing—to understand how computers execute code.',
    },
    {
      icon: Compass,
      title: 'Algorithmic Problem Solving',
      description:
        'Practicing data structures and computational complexity through structured exercises across arrays, linked lists, stacks, and search algorithms.',
    },
    {
      icon: BookOpen,
      title: 'Practical Project Building',
      description:
        'Reinforcing theoretical university coursework by transforming concepts into tangible command-line tools and software utilities.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-b border-[#E5E0D8]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="01"
          title="About Me"
          subtitle="My motivation in Computer Science and Engineering and my commitment to hands-on learning."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Authentic Narrative Text */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg sm:text-xl text-[#141413] leading-relaxed font-normal">
              {portfolioData.personal.aboutParagraph1}
            </p>

            <p className="text-base sm:text-lg text-[#6B6862] leading-relaxed">
              {portfolioData.personal.aboutParagraph2}
            </p>

            <div className="p-6 rounded-xl bg-[#FFFFFF] border-l-4 border-l-[#D9480F] border border-[#E5E0D8] mt-8">
              <p className="font-serif italic text-base sm:text-lg text-[#141413]">
                &ldquo;Building software from the ground up teaches patience, discipline, and attention to detail. Every bug solved in C provides deeper insight into how software actually runs.&rdquo;
              </p>
              <span className="block mt-2 font-mono text-xs uppercase tracking-wider text-[#8C8880]">
                — Rashmita Halder
              </span>
            </div>
          </div>

          {/* Pillars of Active Learning */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#8C8880] mb-4">
              Current Academic Focus Areas
            </h3>

            {learningPillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E5E0D8] transition-all hover:border-[#D9480F]/40"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-[#FBF0EB] text-[#D9480F] flex-shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#141413]">
                        {pillar.title}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-[#6B6862] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
