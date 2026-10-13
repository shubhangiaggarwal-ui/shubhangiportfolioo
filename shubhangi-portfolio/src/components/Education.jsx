import React from 'react';

export const Education = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#94745C] block mb-2">Chapter II • Academic Milestones</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#17263D] font-bold tracking-tight">
              Education Timeline
            </h2>
            <div className="w-16 h-0.5 bg-[#604333] mt-3"></div>
          </div>
          <p className="font-serif italic text-lg text-[#604333] max-w-md">
            Consistent academic dedication, analytical grounding, and an eagerness to expand horizons.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="p-5 rounded-lg bg-[#FAF6EF] border border-[#D8C7B3]/60 text-center">
            <span className="font-mono text-xs text-[#94745C] uppercase block mb-1">Class X Score</span>
            <span className="font-display text-3xl sm:text-4xl font-bold text-[#604333]">93%</span>
            <span className="font-mono text-[11px] text-stone-500 block mt-1">Secondary Excellence</span>
          </div>

          <div className="p-5 rounded-lg bg-[#FAF6EF] border border-[#D8C7B3]/60 text-center">
            <span className="font-mono text-xs text-[#94745C] uppercase block mb-1">Class XII Score</span>
            <span className="font-display text-3xl sm:text-4xl font-bold text-[#604333]">90%</span>
            <span className="font-mono text-[11px] text-stone-500 block mt-1">Senior Secondary</span>
          </div>

          <div className="p-5 rounded-lg bg-[#FAF6EF] border border-[#D8C7B3]/60 text-center">
            <span className="font-mono text-xs text-[#94745C] uppercase block mb-1">Current Degree</span>
            <span className="font-display text-3xl sm:text-4xl font-bold text-[#17263D]">B.Tech</span>
            <span className="font-mono text-[11px] text-stone-500 block mt-1">CSE (Core)</span>
          </div>

          <div className="p-5 rounded-lg bg-[#FAF6EF] border border-[#D8C7B3]/60 text-center">
            <span className="font-mono text-xs text-[#94745C] uppercase block mb-1">Institution</span>
            <span className="font-serif text-2xl font-bold text-[#17263D] leading-tight block mt-1">JECRC</span>
            <span className="font-mono text-[11px] text-stone-500 block mt-1">Jaipur, Rajasthan</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-[#D8C7B3]/50 before:-translate-x-1/2">

          {/* Node 1: Current */}
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-[#17263D] text-[#F7F1E7] mb-2">
                CURRENTLY • 2025 – PRESENT
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#17263D]">
                B.Tech in Computer Science & Engineering (Core)
              </h3>
              <p className="font-medium text-[#604333] text-sm mt-1">
                JECRC University, Jaipur
              </p>
              <p className="text-sm text-stone-600 mt-3 leading-relaxed">
                Currently in the first year of core Computer Science. Building rigorous foundations in problem-solving, structured programming, computer systems, discrete mathematics, and computational logic. Actively participating in workshops and collaborative learning circles.
              </p>
            </div>

            <div className="w-8 h-8 rounded-full bg-[#FAF6EF] border-2 border-[#17263D] text-[#17263D] flex items-center justify-center font-mono text-xs font-bold z-10 mx-auto md:mx-0 shadow">
              1
            </div>

            <div className="md:w-1/2 md:pl-12 order-3">
              <div className="p-5 rounded bg-[#FAF6EF] border border-[#D8C7B3]/70 space-y-2">
                <span className="font-mono text-xs text-[#94745C] block">Focus Areas & Modules</span>
                <ul className="text-xs text-stone-700 space-y-1.5 list-disc pl-4">
                  <li>Foundations of Computing & Algorithmic Problem Solving</li>
                  <li>Programming Languages & Syntax Explorations (C, Python)</li>
                  <li>Digital Principles, Computer Organization & Logic Gates</li>
                  <li>Mathematics for Computer Science & Analytical Thinking</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Node 2: Class XII */}
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
              <div className="p-5 rounded bg-[#FAF6EF] border border-[#D8C7B3]/70 space-y-2">
                <span className="font-mono text-xs text-[#94745C] block">Academic Highlights</span>
                <ul className="text-xs text-stone-700 space-y-1.5 list-disc pl-4 md:list-none">
                  <li>Secured a distinction score of <strong>90%</strong></li>
                  <li>Solid mastery of Physics, Mathematics, and Analytical problem solving</li>
                  <li>Cultivated rigorous study discipline and methodical revision habits</li>
                </ul>
              </div>
            </div>

            <div className="w-8 h-8 rounded-full bg-[#FAF6EF] border-2 border-[#604333] text-[#604333] flex items-center justify-center font-mono text-xs font-bold z-10 mx-auto md:mx-0 shadow">
              2
            </div>

            <div className="md:w-1/2 md:pl-12 order-3">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-[#604333] text-[#F7F1E7] mb-2">
                SENIOR SECONDARY
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#17263D]">
                Class XII — 90%
              </h3>
              <p className="font-medium text-[#604333] text-sm mt-1">
                Science & Mathematics Stream
              </p>
              <p className="text-sm text-stone-600 mt-3 leading-relaxed">
                Completed Senior Secondary education with high distinction (90%), honing quantitative reasoning, problem structuring, and scientific curiosity that laid the bedrock for engineering studies.
              </p>
            </div>
          </div>

          {/* Node 3: Class X */}
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-[#94745C] text-[#F7F1E7] mb-2">
                SECONDARY EDUCATION
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#17263D]">
                Class X — 93%
              </h3>
              <p className="font-medium text-[#604333] text-sm mt-1">
                Holistic Secondary Curriculum
              </p>
              <p className="text-sm text-stone-600 mt-3 leading-relaxed">
                Achieved an outstanding 93% score, consistently excelling in academics, creative writing contests, reading circles, and school activities that fostered early leadership and curiosity.
              </p>
            </div>

            <div className="w-8 h-8 rounded-full bg-[#FAF6EF] border-2 border-[#94745C] text-[#94745C] flex items-center justify-center font-mono text-xs font-bold z-10 mx-auto md:mx-0 shadow">
              3
            </div>

            <div className="md:w-1/2 md:pl-12 order-3">
              <div className="p-5 rounded bg-[#FAF6EF] border border-[#D8C7B3]/70 space-y-2">
                <span className="font-mono text-xs text-[#94745C] block">Foundational Skills</span>
                <ul className="text-xs text-stone-700 space-y-1.5 list-disc pl-4">
                  <li>Secured <strong>93%</strong> overall academic achievement</li>
                  <li>Active involvement in school literary debates, reading & writing</li>
                  <li>Developed core habits of focus, organization, and teamwork</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
