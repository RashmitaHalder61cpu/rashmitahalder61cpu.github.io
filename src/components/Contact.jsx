import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Mail, Copy, Check, ArrowUpRight, MessageSquareCode } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.socials.emailPlaceholder);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="05"
          title={portfolioData.contact.heading}
          subtitle={portfolioData.contact.subheading}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Direct Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* GitHub Card */}
            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E5E0D8] transition-all duration-200 hover:border-[#D9480F]/40 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FBF0EB] flex items-center justify-center text-[#D9480F] mb-5">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#141413]">
                  GitHub
                </h3>
                <p className="mt-2 text-sm text-[#6B6862]">
                  Explore my source code, repositories, and learning milestones.
                </p>
                <div className="mt-4 font-mono text-xs text-[#141413] bg-[#F4F1EB] px-3 py-1.5 rounded-md inline-block">
                  @RashmitaHalder61cpu
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0ECE4]">
                <a
                  href={portfolioData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#D9480F] hover:text-[#C03E0C] group transition-colors focus-visible:ring-2 focus-visible:ring-[#D9480F] rounded"
                  aria-label="Open Rashmita's GitHub profile in a new tab"
                >
                  <span>View GitHub Profile</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E5E0D8] transition-all duration-200 hover:border-[#D9480F]/40 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FBF0EB] flex items-center justify-center text-[#D9480F] mb-5">
                  <LinkedinIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#141413]">
                  LinkedIn
                </h3>
                <p className="mt-2 text-sm text-[#6B6862]">
                  Connect with me professionally or message me regarding opportunities.
                </p>
                <div className="mt-4 font-mono text-xs text-[#141413] bg-[#F4F1EB] px-3 py-1.5 rounded-md inline-block">
                  in/rashmita-halder
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0ECE4]">
                <a
                  href={portfolioData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#D9480F] hover:text-[#C03E0C] group transition-colors focus-visible:ring-2 focus-visible:ring-[#D9480F] rounded"
                  aria-label="Open Rashmita's LinkedIn profile in a new tab"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Email Card (Clearly marked placeholder) */}
            <div className="sm:col-span-2 p-7 rounded-2xl bg-[#FFFFFF] border border-[#E5E0D8] transition-all duration-200 hover:border-[#D9480F]/40">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FBF0EB] flex items-center justify-center text-[#D9480F] flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold text-[#141413]">
                        Email
                      </h3>
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#F4F1EB] text-[#8C8880] border border-[#E5E0D8]">
                        Placeholder
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-[#6B6862]">
                      Email contact slot (ready to be updated with personal email).
                    </p>
                    <div className="mt-2 font-mono text-sm text-[#141413]">
                      {portfolioData.socials.emailPlaceholder}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[#E5E0D8] bg-[#F9F8F6] text-sm text-[#141413] font-medium hover:border-[#D9480F] hover:bg-[#FDF3EE] hover:text-[#D9480F] transition-all focus-visible:ring-2 focus-visible:ring-[#D9480F] self-start sm:self-center flex-shrink-0 cursor-pointer"
                  aria-label="Copy email address placeholder to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#D9480F]" />
                      <span className="text-[#D9480F]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Side Editorial Note */}
          <div className="lg:col-span-4 bg-[#FFFFFF] border border-[#E5E0D8] rounded-2xl p-7 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#F4F1EB] flex items-center justify-center text-[#141413]">
                <MessageSquareCode className="w-5 h-5" />
              </div>

              <h4 className="text-lg font-semibold text-[#141413]">
                Open to Dialogue
              </h4>

              <p className="text-sm text-[#6B6862] leading-relaxed">
                Whether you want to discuss algorithmic problem solving, C programming, student engineering initiatives, or peer collaboration, feel free to reach out.
              </p>

              <div className="pt-2 text-xs font-mono text-[#8C8880]">
                Response preference: <span className="text-[#141413] font-medium">LinkedIn Message</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#F0ECE4]">
              <span className="text-xs text-[#8C8880] block">
                Primary Location:
              </span>
              <span className="text-sm font-medium text-[#141413]">
                Bengaluru, Karnataka, India
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
