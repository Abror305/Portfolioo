import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './sections/Hero';
import { SkillsCarousel } from './sections/SkillsCarousel';
import { Certifications } from './sections/Certifications';
import { TerminalSection } from './sections/Terminal';
export default function App() {
  const [isHackerMode, setIsHackerMode] = useState(false);

  return (
    <div className={`min-h-screen font-mono transition-colors duration-500 relative select-none ${
      isHackerMode ? 'bg-[#03060d] text-emerald-400' : 'bg-[#060a14] text-slate-200'
    }`}>
      
      {/* Enhanced Matrix Background Animation */}
      {isHackerMode && (
        <>
          {/* Main matrix grid */}
          <div className="fixed inset-0 opacity-[0.08] pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px] z-0 animate-pulse" />
          
          {/* Animated falling characters */}
          <div className="fixed inset-0 opacity-[0.04] pointer-events-none z-0 overflow-hidden">
            <div className="absolute inset-0 animate-matrix-fall font-mono text-emerald-500/30 text-xs leading-relaxed whitespace-pre">
              01101001 10110100 11001010 01011011 10101100 01100101
              10110101 01110010 11001001 00101010 10101100 11010101
              01011011 10101100 01100101 10110101 01110010 11001001
              00101010 10101100 11010101 01011011 10101100 01100101
            </div>
          </div>

          {/* Holographic grid lines */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/0 via-emerald-500/[0.03] to-emerald-500/0 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-transparent to-emerald-500/0" />
          </div>

          {/* Animated scan lines */}
          <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.02]">
            <div className="h-full w-full bg-[repeating-linear-gradient(0deg,#10b981,#10b981_1px,transparent_1px,transparent_2px)] animate-scanlines" />
          </div>
        </>
      )}

      {/* Navbar */}
      <Navbar isHackerMode={isHackerMode} setIsHackerMode={setIsHackerMode} />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero isHackerMode={isHackerMode} />
        <SkillsCarousel isHackerMode={isHackerMode} />
        <Certifications isHackerMode={isHackerMode} />
        <TerminalSection isHackerMode={isHackerMode} />
      </main>
    </div>
  );
}