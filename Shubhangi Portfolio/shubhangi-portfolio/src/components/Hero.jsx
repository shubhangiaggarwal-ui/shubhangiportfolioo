import React from 'react';
import { Compass, ArrowDown, Send, BookOpen, PenTool, Utensils, Globe, Cpu, PhoneCall, Copy, Linkedin, Sparkles } from 'lucide-react';

export const Hero = ({ onCopyPhone }) => {
  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Editorial Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-10 border-b border-[#D8C7B3]/60 font-mono text-xs text-[#94745C] tracking-widest uppercase">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#604333]"></span>
            <span>EST. 2008 • JAIPUR, INDIA</span>
          </div>
          <div className="flex items-center gap-6">
            <span>B.Tech CSE (Core) • 1st Year</span>
            <span>Age: 18</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-7">
            
            <div className="space-y-3">
              <span className="editorial-stamp">
                <Compass className="w-3.5 h-3.5 text-[#604333]" />
                Personal Portfolio
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#17263D] font-bold tracking-tight leading-[1.08]">
                SHUBHANGI AGGARWAL
              </h1>
              <p className="font-serif italic text-2xl sm:text-3xl text-[#604333] font-medium leading-snug">
                Curious mind. Creative soul. Technology in progress.
              </p>
            </div>

            {/* Mission Statement Quote */}
            <blockquote className="border-l-2 border-[#604333] pl-6 font-serif italic text-xl text-[#17263D]/90 my-6 max-w-xl">
              “An aspiring technology enthusiast who loves reading, writing, exploring cultures, and discovering new possibilities through creativity and technology.”
            </blockquote>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#about"
                className="px-7 py-3.5 rounded-full bg-[#17263D] hover:bg-[#604333] text-[#F7F1E7] text-sm font-medium tracking-wide uppercase transition-all shadow-md hover:shadow-lg flex items-center gap-2.5"
              >
                <span>Explore My World</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full border border-[#604333] text-[#604333] hover:bg-[#604333] hover:text-[#F7F1E7] text-sm font-medium tracking-wide uppercase transition-all flex items-center gap-2"
              >
                <span>Let's Connect</span>
                <Send className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Personal Interests Preview */}
            <div className="pt-6 border-t border-[#D8C7B3]/50">
              <p className="font-mono text-xs uppercase tracking-wider text-[#94745C] mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#604333]" />
                Personal Interests at a Glance
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1.5 rounded-full bg-[#FAF6EF] border border-[#D8C7B3] text-[#17263D] flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#604333]" /> Reading & Perspectives
                </span>
                <span className="px-3 py-1.5 rounded-full bg-[#FAF6EF] border border-[#D8C7B3] text-[#17263D] flex items-center gap-1.5">
                  <PenTool className="w-3.5 h-3.5 text-[#604333]" /> Writing & Blogging
                </span>
                <span className="px-3 py-1.5 rounded-full bg-[#FAF6EF] border border-[#D8C7B3] text-[#17263D] flex items-center gap-1.5">
                  <Utensils className="w-3.5 h-3.5 text-[#604333]" /> Cooking & Practical Craft
                </span>
                <span className="px-3 py-1.5 rounded-full bg-[#FAF6EF] border border-[#D8C7B3] text-[#17263D] flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#604333]" /> Languages & World Cultures
                </span>
                <span className="px-3 py-1.5 rounded-full bg-[#FAF6EF] border border-[#D8C7B3] text-[#17263D] flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#604333]" /> Digital Foundations & AI
                </span>
              </div>
            </div>

            {/* Direct Contact Strip */}
            <div className="p-4 rounded-lg bg-[#FAF6EF] border border-[#D8C7B3]/70 flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="font-mono text-[11px] text-[#94745C] uppercase tracking-wider block">Direct Contact Card</span>
                <div className="flex items-center gap-3 text-sm font-medium text-[#17263D]">
                  <span><strong className="font-semibold">Phone:</strong> +91 9251025525</span>
                  <span className="text-[#D8C7B3]">•</span>
                  <span><strong className="font-semibold">University:</strong> JECRC University</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="tel:+919251025525"
                  className="px-3 py-1.5 rounded border border-[#604333] text-[#604333] hover:bg-[#604333] hover:text-[#F7F1E7] text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5" /> Call
                </a>
                <button
                  onClick={() => onCopyPhone('9251025525')}
                  className="px-3 py-1.5 rounded bg-[#17263D] hover:bg-[#233754] text-[#F7F1E7] text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" /> Copy Phone
                </button>
                <a
                  href="https://www.linkedin.com/in/shubhangi-aggarwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded border border-[#17263D] text-[#17263D] hover:bg-[#17263D] hover:text-[#F7F1E7] text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Matted Editorial Artwork */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="paper-matting w-full max-w-md rounded-sm">
              <div className="overflow-hidden rounded bg-[#FAF6EF] relative group">
                <img 
                  src="./assets/hero-illustration.jpg" 
                  alt="Editorial illustration of Shubhangi Aggarwal at her desk with books and laptop"
                  className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-3 left-3 bg-[#17263D]/80 backdrop-blur-sm text-[#F7F1E7] text-[11px] font-mono px-2.5 py-1 rounded">
                  Plate 01 • The Curious Desk
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#D8C7B3]/40 flex items-center justify-between text-xs text-[#94745C]">
                <span className="font-serif italic text-sm text-[#604333]">“Where pages meet code”</span>
                <span className="font-mono text-[11px]">Jaipur, RJ</span>
              </div>
            </div>

            <div className="mt-4 text-center">
              <span className="font-handwriting text-xl text-[#604333]">
                ~ Exploring logic, literature, and living in balance ~
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
