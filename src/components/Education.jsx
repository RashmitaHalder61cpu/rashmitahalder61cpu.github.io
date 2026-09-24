import React from 'react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, BookCheck } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 border-b border-[#E5E0D8]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="04"
          title="Education"
          subtitle="Formal academic studies and computer science curriculum."
        />

        <div className="bg-[#FFFFFF] border border-[#E5E0D8] rounded-2xl p-7 sm:p-10 shadow-[0_8px_30px_rgba(20,20,19,0.03)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Institution Badge & Major Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FDF3EE] text-[#D9480F] text-xs font-mono font-medium">
                <GraduationCap className="w-4 h-4" />
                <span>Undergraduate Degree</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#141413] font-serif tracking-tight">
                  {portfolioData.education.institution}
                </h3>
                <p className="text-lg font-medium text-[#D9480F] mt-1">
                  {portfolioData.education.degree}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#6B6862] pt-2">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#8C8880]" />
                  <span>Current Status: <strong className="text-[#141413]">{portfolioData.education.currentStage}</strong></span>
                </span>
                <span className="text-[#D1CBC1]">•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#8C8880]" />
                  <span>Bengaluru, Karnataka, India</span>
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#4D4B46] leading-relaxed pt-2">
                Pursuing a four-year engineering curriculum focused on theoretical computer science, software design principles, and engineering problem-solving.
              </p>
            </div>

            {/* Curriculum Focus Areas */}
            <div className="lg:col-span-5 bg-[#F9F8F6] p-6 rounded-xl border border-[#E5E0D8]">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#8C8880] mb-4 flex items-center gap-2">
                <BookCheck className="w-4 h-4 text-[#D9480F]" />
                Key Coursework &amp; Academic Focus
              </h4>

              <ul className="space-y-3">
                {portfolioData.education.academicFocus.map((topic, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#141413]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9480F] mt-2 flex-shrink-0" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
