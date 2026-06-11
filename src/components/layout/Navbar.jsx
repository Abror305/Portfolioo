import React from 'react';

const NAV_LINKS = [
  { href: '#home', label: '~/HOME' },
  { href: '#skills', label: '~/SKILLS' },
  { href: '#projects', label: '~/PROJECTS' },
  { href: '#terminal', label: '~/TERMINALHACK' }
];

export function Navbar({ isHackerMode, setIsHackerMode }) {
  return (
    <header className={`border-b backdrop-blur-md sticky top-0 z-50 transition-colors duration-500 ${
      isHackerMode 
        ? 'border-red-500/20 bg-black/60 shadow-[0_4px_30px_rgba(239,68,68,0.05)]' 
        : 'border-slate-800 bg-[#080d1a]/70'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between font-mono">
        
        {/* Dynamic Logo/Prompt Section */}
        <div className="flex items-center gap-1.5 text-xs md:text-sm font-bold tracking-wide select-none">
          {isHackerMode ? (
            /* Hacker Mode: Red Team Root Prompt */
            <div className="flex items-center gap-1">
              <span className="text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.6)] animate-pulse">root</span>
              <span className="text-slate-400">@</span>
              <span className="text-emerald-400">bakhromov</span>
              <span className="text-slate-500">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-red-500 font-black">#</span>
              <span className="w-2 h-4 bg-red-500 animate-[ping_1.5s_infinite] ml-0.5 inline-block" />
            </div>
          ) : (
            /* Dev Mode: VS Code / IDE Import Statement Style */
            <div className="flex items-center gap-1 font-sans tracking-tight text-xs">
              <span className="text-amber-400 italic font-medium">import</span>
              <span className="text-slate-300">{`{`}</span>
              <span className="text-sky-400 font-semibold tracking-wide">bakhromov</span>
              <span className="text-slate-300">{`}`}</span>
              <span className="text-amber-400 italic font-medium">from</span>
              <span className="text-emerald-400">'@dev/core'</span>
              <span className="text-slate-500">;</span>
            </div>
          )}
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-widest text-slate-400 select-none">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-all duration-300 relative py-1 group ${
                isHackerMode ? 'hover:text-red-400' : 'hover:text-blue-400'
              }`}
            >
              {link.label}
              {/* Hover Line Effect */}
              <span className={`absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                isHackerMode ? 'bg-red-500 shadow-[0_0_8px_#ef4444]' : 'bg-blue-400 shadow-[0_0_8px_#3b82f6]'
              }`} />
            </a>
          ))}
        </nav>

        {/* Mode Toggle Switch */}
        <div className="flex items-center gap-3 select-none">
          <span className={`text-[10px] font-black tracking-wider transition-colors duration-300 ${
            !isHackerMode ? 'text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]' : 'text-slate-600'
          }`}>
            DEV.js
          </span>
          
          <button
            onClick={() => setIsHackerMode(!isHackerMode)}
            className={`w-14 h-6 rounded-full p-0.5 transition-all duration-500 relative border-2 ${
              isHackerMode 
                ? 'bg-red-950/40 border-red-500/50 hover:border-red-500' 
                : 'bg-blue-950/40 border-blue-500/50 hover:border-blue-500'
            }`}
            aria-label="Toggle interface operating mode"
          >
            <div className={`w-4 h-4 rounded-full transition-transform duration-500 transform ${
              isHackerMode 
                ? 'translate-x-8 bg-red-500 shadow-[0_0_12px_#ef4444]' 
                : 'translate-x-0 bg-blue-500 shadow-[0_0_12px_#3b82f6]'
            }`} />
          </button>
          
          <span className={`text-[10px] font-black tracking-wider transition-colors duration-300 ${
            isHackerMode ? 'text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.4)]' : 'text-slate-600'
          }`}>
            ROOT#
          </span>
        </div>

      </div>
    </header>
  );
}