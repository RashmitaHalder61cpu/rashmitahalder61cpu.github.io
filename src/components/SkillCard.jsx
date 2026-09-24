import React from 'react';
import { 
  Terminal, 
  Coffee, 
  Code2, 
  Database, 
  Layout, 
  Palette, 
  GitBranch 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { cn } from '../utils/cn';

// Skill icon mapper using reliable Lucide icons + custom GithubIcon
const getSkillIcon = (name) => {
  switch (name.toLowerCase()) {
    case 'c':
      return <Terminal className="w-5 h-5 text-[#D9480F]" />;
    case 'java':
      return <Coffee className="w-5 h-5 text-[#D9480F]" />;
    case 'python':
      return <Code2 className="w-5 h-5 text-[#D9480F]" />;
    case 'sql':
      return <Database className="w-5 h-5 text-[#D9480F]" />;
    case 'html':
      return <Layout className="w-5 h-5 text-[#D9480F]" />;
    case 'css':
      return <Palette className="w-5 h-5 text-[#D9480F]" />;
    case 'git':
      return <GitBranch className="w-5 h-5 text-[#D9480F]" />;
    case 'github':
      return <GithubIcon className="w-5 h-5 text-[#D9480F]" />;
    default:
      return <Code2 className="w-5 h-5 text-[#D9480F]" />;
  }
};

export default function SkillCard({ skill }) {
  return (
    <div
      className={cn(
        'group relative p-6 bg-[#FFFFFF] rounded-xl border border-[#E5E0D8]',
        'transition-all duration-300 hover:border-[#D9480F]/40 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_rgba(20,20,19,0.08)]',
        'flex flex-col justify-between'
      )}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-lg bg-[#FBF0EB] flex items-center justify-center transition-colors group-hover:bg-[#FDF3EE]">
            {getSkillIcon(skill.name)}
          </div>
          <span className="font-mono text-[11px] font-medium tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#F4F1EB] text-[#6B6862] border border-[#E5E0D8]">
            {skill.badge}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-[#141413] tracking-tight group-hover:text-[#D9480F] transition-colors">
          {skill.name}
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-[#6B6862] leading-relaxed">
          {skill.description}
        </p>
      </div>

      <div className="mt-5 pt-4 border-t border-[#F0ECE4] flex items-center justify-between">
        <span className="text-[11px] text-[#8C8880] font-mono">
          {skill.category}
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#D9480F]/40 group-hover:bg-[#D9480F] transition-colors" />
      </div>
    </div>
  );
}
