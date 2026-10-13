import React from 'react';
import { Feather, ArrowRight } from 'lucide-react';

export const About = ({ onOpenJournal }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF6EF]/60 border-t border-b border-[#D8C7B3]/40">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[#94745C] block mb-2">Chapter I • Personal Narrative</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#17263D] font-bold tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-0.5 bg-[#604333] mt-3 mb-4"></div>
          <p className="font-serif italic text-xl text-[#604333]">
            Curiosity as my compass, dedication as my craft.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Editorial Essay Column */}
          <div className="lg:col-span-7 space-y-6 text-[#17263D]/90 leading-relaxed text-base sm:text-lg">
            
            <p className="drop-cap">
              Hello, I am Shubhangi — an 18-year-old first-year Computer Science & Engineering student at JECRC University, Jaipur. I navigate the world with an open notebook, an attentive mind, and an abiding belief that the most profound discoveries happen when analytical logic is paired with human creativity.
            </p>

            <p>
              My approach to life and academics is anchored in an genuine <strong>passion for learning</strong>. I do not look at code or technology as intimidating monoliths, but as dynamic languages waiting to be decoded. Every question, whether related to algorithmic efficiency or the subtle rhythm of a written sentence, is an invitation to explore deeper.
            </p>

            <p>
              I take quiet pride in my <strong>hardworking nature</strong> and resilience. Real learning requires patience — the discipline to sit with an error, the willingness to draft and re-draft, and the humility to be a beginner. Alongside diligence, I hold <strong>creativity and adaptability</strong> as core values; when circumstances change or new tools emerge, I embrace them with open arms rather than hesitation.
            </p>

            <p>
              Equally important to me is the spirit of <strong>cooperation and collaboration</strong>. Technology is never a solitary endeavor; the best systems are created when diverse minds bring their distinct perspectives together. I cherish working in teams, learning from peers, and offering support whenever needed.
            </p>

            {/* Highlight on Hands-on & Creative Skills */}
            <div className="p-6 rounded-md bg-[#F7F1E7] border border-[#D8C7B3] my-6">
              <h4 className="font-serif text-xl font-bold text-[#604333] mb-2 flex items-center gap-2">
                <Feather className="w-5 h-5 text-[#94745C]" />
                A Balanced Philosophy: Mind, Hands & Craft
              </h4>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                I firmly believe that one should cultivate both technical intellect and practical, manual skills. Whether it is understanding computer memory architectures, practicing neat handwritten journals, crafting culinary recipes with precision, or wireframing designs, I enjoy learning tactile, real-world skills that keep life grounded and creative.
              </p>
            </div>

            {/* Interactive Journal Entry Trigger */}
            <div>
              <button
                onClick={() => onOpenJournal('writing-thoughts')}
                className="inline-flex items-center gap-2 font-serif italic text-lg text-[#604333] hover:text-[#17263D] transition-colors underline decoration-[#D8C7B3] underline-offset-4"
              >
                <span>Read an excerpt: “Writing as a Mirror for Thinking”</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right: Core Pillars & Vignette */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="paper-matting rounded-sm">
              <div className="overflow-hidden rounded bg-[#FAF6EF]">
                <img 
                  src="./assets/journal-still-life.jpg" 
                  alt="Journal still life illustration with coffee and glasses"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="mt-3 font-mono text-[11px] text-[#94745C] text-center">
                A quiet desk: Journaling, observation & thoughtful pacing.
              </p>
            </div>

            {/* 4 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded bg-[#FAF6EF] border border-[#D8C7B3]/60">
                <span className="font-mono text-xs text-[#94745C] block mb-1">01 / ATTITUDE</span>
                <h4 className="font-serif text-lg font-bold text-[#17263D]">Curiosity & Grit</h4>
                <p className="text-xs text-stone-600 mt-1 leading-normal">
                  Approaching complex ideas with questions, patience, and deliberate practice.
                </p>
              </div>

              <div className="p-4 rounded bg-[#FAF6EF] border border-[#D8C7B3]/60">
                <span className="font-mono text-xs text-[#94745C] block mb-1">02 / MINDSET</span>
                <h4 className="font-serif text-lg font-bold text-[#17263D]">Adaptability</h4>
                <p className="text-xs text-stone-600 mt-1 leading-normal">
                  Embracing the beginner's mindset in rapid technological shifts.
                </p>
              </div>

              <div className="p-4 rounded bg-[#FAF6EF] border border-[#D8C7B3]/60">
                <span className="font-mono text-xs text-[#94745C] block mb-1">03 / ETHOS</span>
                <h4 className="font-serif text-lg font-bold text-[#17263D]">Cooperation</h4>
                <p className="text-xs text-stone-600 mt-1 leading-normal">
                  Belief in collective intelligence, peer learning, and empathetic teamwork.
                </p>
              </div>

              <div className="p-4 rounded bg-[#FAF6EF] border border-[#D8C7B3]/60">
                <span className="font-mono text-xs text-[#94745C] block mb-1">04 / PURSUIT</span>
                <h4 className="font-serif text-lg font-bold text-[#17263D]">Hands-On Craft</h4>
                <p className="text-xs text-stone-600 mt-1 leading-normal">
                  Pairing digital code with manual dexterity, writing, and practical skills.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
