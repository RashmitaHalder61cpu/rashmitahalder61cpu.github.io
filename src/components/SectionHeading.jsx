import React from 'react';
import { cn } from '../utils/cn';

export default function SectionHeading({
  number,
  title,
  subtitle,
  className,
  align = 'left',
}) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl',
        className
      )}
    >
      <div className={cn('flex items-center gap-3 mb-3', align === 'center' && 'justify-center')}>
        {number && (
          <span className="font-mono text-xs font-semibold tracking-wider text-[#D9480F] uppercase">
            {number}
          </span>
        )}
        {number && <span className="h-px w-6 bg-[#E5E0D8]" aria-hidden="true" />}
        <span className="text-xs uppercase tracking-widest text-[#6B6862] font-medium">
          Section
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#141413] font-serif leading-[1.15]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#6B6862] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
