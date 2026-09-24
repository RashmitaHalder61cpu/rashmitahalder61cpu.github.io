import React, { useState } from 'react';
import { Mail, ExternalLink, Check, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { cn } from '../utils/cn';

export default function SocialLink({
  platform,
  href,
  label,
  value,
  isCopyable = false,
  variant = 'default', // 'default', 'button', 'badge'
  className,
}) {
  const [copied, setCopied] = useState(false);

  const getIcon = () => {
    switch (platform) {
      case 'github':
        return <GithubIcon className="w-4 h-4" />;
      case 'linkedin':
        return <LinkedinIcon className="w-4 h-4" />;
      case 'email':
        return <Mail className="w-4 h-4" aria-hidden="true" />;
      default:
        return <ExternalLink className="w-4 h-4" aria-hidden="true" />;
    }
  };

  const handleCopy = (e) => {
    if (!isCopyable) return;
    e.preventDefault();
    if (value) {
      navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (isCopyable) {
    return (
      <button
        type="button"
        onClick={handleCopy}
        className={cn(
          'group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-[#E5E0D8] bg-[#FFFFFF] text-sm text-[#141413] font-medium transition-all duration-200 hover:border-[#D9480F] hover:bg-[#FDF3EE] focus-visible:ring-2 focus-visible:ring-[#D9480F]',
          className
        )}
        aria-label={`Copy email address: ${value}`}
        title="Click to copy to clipboard"
      >
        <span className="text-[#6B6862] group-hover:text-[#D9480F] transition-colors">
          {copied ? <Check className="w-4 h-4 text-[#D9480F]" /> : <Copy className="w-4 h-4" />}
        </span>
        <span className="font-mono text-xs text-[#141413]">{value}</span>
        <span className="text-xs text-[#6B6862] group-hover:text-[#D9480F] transition-colors font-sans">
          {copied ? 'Copied!' : 'Copy'}
        </span>
      </button>
    );
  }

  if (variant === 'button') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label || `${platform} profile of Rashmita Halder (opens in new tab)`}
        className={cn(
          'inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#D9480F]',
          'bg-[#FFFFFF] border border-[#E5E0D8] text-[#141413] hover:border-[#D9480F] hover:text-[#D9480F] hover:bg-[#FDF3EE]',
          className
        )}
      >
        {getIcon()}
        <span>{label}</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label || `${platform} profile (opens in new tab)`}
      className={cn(
        'group inline-flex items-center gap-2 text-sm text-[#6B6862] hover:text-[#D9480F] transition-colors duration-150 py-1 font-medium focus-visible:ring-2 focus-visible:ring-[#D9480F] rounded',
        className
      )}
    >
      <span className="p-1.5 rounded-md bg-[#F4F1EB] group-hover:bg-[#FDF3EE] group-hover:text-[#D9480F] text-[#141413] transition-colors">
        {getIcon()}
      </span>
      <span>{label}</span>
      <ExternalLink className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#D9480F]" />
    </a>
  );
}
