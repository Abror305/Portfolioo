import React from 'react';
import { PROFILE } from '../constants.js';

export function Hero({ isHackerMode }) {
  return (
    <section id="home" className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center relative z-10 font-mono select-none">
      
      {/* Dynamic Operational Status Badge */}
      <div className={`inline-flex items-center gap-2 text-[10px] font-black tracking-widest uppercase mb-6 px-3 py-1 rounded border border-dashed transition-all duration-500 ${
        isHackerMode 
          ? 'border-red-500/30 text-red-500 bg-red-500/5 shadow-[0_0_15px_rgba(239,68,68,0.1)]' 
          : 'border-blue-500/30 text-blue-400 bg-blue-500/5 shadow-[0_0_15px_rgba(59,130,246,0.1)]'
      }`}>
        <span className={`w-1.5 h-1.5 rounded-full animate-ping ${isHackerMode ? 'bg-red-500' : 'bg-blue-500'}`}></span>
        {isHackerMode ? '⚠️ BREACH_MODE // ACCESS_GRANTED' : '🚀 STABLE_BUILD // PRODUCTION'}
      </div>

      {/* Terminal Context Indicator */}
      <p className="text-[11px] text-slate-500 mb-2 tracking-widest">
        {isHackerMode ? 'anonymous@terminal:~# whoami' : '// Runtime Execution Context'}
      </p>

      {/* Main Identity Name */}
      <h1 className="text-4xl md:text-6xl font-black font-sans tracking-tight mb-3 text-white">
        {PROFILE.name}
      </h1>

      {/* Subtitles & Operational Designations */}
      <h2 className="text-2xl md:text-4xl font-extrabold font-sans tracking-tight mb-6">
        {isHackerMode ? (
          <div className="flex flex-wrap justify-center items-center gap-2">
            <span className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.4)] animate-pulse">Cybersecurity Practitioner</span>
            <span className="text-slate-600">&</span>
            <span className="text-emerald-400">Offensive Automation</span>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center items-center gap-2">
            <span className="text-sky-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]">Full-Stack Engineer</span>
            <span className="text-slate-600">&</span>
            <span className="text-indigo-400">UI/UX Architect</span>
          </div>
        )}
      </h2>

      {/* Git Version Control Simulators */}
      <p className={`text-xs md:text-sm mb-8 tracking-wide ${isHackerMode ? 'text-red-400/80' : 'text-blue-400/80'}`}>
        {isHackerMode ? (
          <>
            git commit -m <span className="underline font-bold text-red-500">"exploit: harvest-session-tdata"</span>
            <span className="animate-[ping_1s_infinite] text-red-500 font-black">_</span>
          </>
        ) : (
          <>
            git commit -m <span className="underline font-bold text-sky-400">"feat: integrate-reactive-state"</span>
            <span className="animate-[ping_1s_infinite] text-sky-400 font-black">_</span>
          </>
        )}
      </p>

      {/* Professional Core Summary Description */}
      <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto mb-4 font-sans leading-relaxed tracking-wide">
        {PROFILE.description}
      </p>

      {/* Experience Timeframes Badges */}
      <p className={`text-xs md:text-sm mb-12 tracking-widest font-bold ${isHackerMode ? 'text-red-400/60' : 'text-blue-400/60'}`}>
        {isHackerMode 
          ? '⚡ LINUX ARCHITECTURE & NETWORK FORENSICS DETECTED' 
          : '📦 ENTERPRISE SCALABILITY & ASYNC PIPELINES LOADED'
        }
      </p>

      {/* Primary Dynamic Call To Actions Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <button className={`px-6 py-3 border text-[11px] font-black tracking-widest rounded transition-all duration-300 uppercase hover:scale-105 ${
          isHackerMode 
            ? 'border-red-500 text-red-400 bg-red-500/5 hover:bg-red-500 hover:text-black hover:shadow-[0_0_25px_rgba(239,68,68,0.5)]' 
            : 'border-blue-500 text-blue-400 bg-blue-500/5 hover:bg-blue-500 hover:text-white hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]'
        }`}>
          {isHackerMode ? './initialize_pentest.sh' : 'compile projects'}
        </button>
        <button className={`px-6 py-3 border text-[11px] font-black tracking-widest rounded transition-all duration-300 bg-transparent uppercase hover:scale-105 ${
          isHackerMode
            ? 'border-slate-800 text-slate-500 hover:text-red-400 hover:border-red-500/40'
            : 'border-slate-800 text-slate-400 hover:text-white hover:border-slate-600'
        }`}>
          {isHackerMode ? 'cat transmission_keys.log' : 'establish connection'}
        </button>
      </div>

      {/* Telemetry Metrics & Metrics Matrix Grid */}
      <div className={`grid grid-cols-3 border divide-x max-w-2xl mx-auto rounded overflow-hidden bg-slate-950/40 backdrop-blur-sm transition-all duration-500 hover:scale-[1.03] ${
        isHackerMode ? 'border-red-500/20 divide-red-500/20' : 'border-slate-800 divide-slate-800'
      }`}>
        
        {/* Metric Column 1 */}
        <div className="p-5 md:p-6 hover:bg-slate-900/20 transition duration-300">
          <div className={`text-2xl md:text-3xl font-black ${isHackerMode ? 'text-red-500' : 'text-blue-400'}`}>
            {isHackerMode ? '20+' : '30+'}
          </div>
          <div className="text-[9px] uppercase tracking-widest text-slate-500 font-black mt-1">
            {isHackerMode ? 'Lab Flags Captured' : 'Repository Deployments'}
          </div>
        </div>

        {/* Metric Column 2 */}
        <div className="p-5 md:p-6 relative hover:bg-slate-900/20 transition duration-300">
          <div className="text-2xl md:text-3xl font-black text-white">
            {isHackerMode ? '500+ /h' : '1.2k+'}
          </div>
          <div className="text-[9px] uppercase tracking-widest text-slate-500 font-black mt-1">
            {isHackerMode ? 'Packet Streams Audited' : 'GitHub Commits'}
          </div>
          <div className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border flex items-center justify-center text-[8px] animate-bounce ${
            isHackerMode ? 'border-red-500/30 text-red-400' : 'border-slate-800 text-slate-500'
          }`}>↓</div>
        </div>

        {/* Metric Column 3 */}
        <div className="p-5 md:p-6 hover:bg-slate-900/20 transition duration-300">
          <div className={`text-2xl md:text-3xl font-black ${isHackerMode ? 'text-emerald-400' : 'text-indigo-400'}`}>
            {isHackerMode ? 'Core OS' : 'MERN Stack'}
          </div>
          <div className="text-[9px] uppercase tracking-widest text-slate-500 font-black mt-1">
            {isHackerMode ? 'Automation Level' : 'Development Domain'}
          </div>
        </div>

      </div>

    </section>
  );
}