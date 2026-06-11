import React from 'react';
import { PROFILE } from '../constants.js';
// Kerakli barcha ikonkalarni import qilamiz
import { 
  SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs, 
  SiLinux, SiWireshark, SiPython 
} from 'react-icons/si';
import { DiTerminal } from 'react-icons/di';

export function Hero({ isHackerMode }) {
  return (
    <section id="home" className="max-w-5xl mx-auto px-6 pt-32 pb-24 text-center relative z-10 font-mono select-none overflow-hidden">
      
      {/* ================= DYNAMIC ORBITING ICONS ANIMATION ================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden hidden md:block">
        {isHackerMode ? (
          /* Hacker Mode: Linux, Nmap (Terminal ramzi), Wireshark, Python ikonkalari */
          <>
            <div className="absolute top-[15%] left-[10%] text-red-500/20 text-6xl animate-[spin_20s_linear_infinite] hover:text-red-500/40 transition-colors">
              <SiLinux />
            </div>
            <div className="absolute top-[20%] right-[12%] text-emerald-500/20 text-7xl animate-[bounce_6s_ease-in-out_infinite] hover:text-emerald-500/40 transition-colors">
              <SiWireshark />
            </div>
            <div className="absolute bottom-[25%] left-[15%] text-amber-500/15 text-5xl animate-[pulse_3s_infinite] hover:text-amber-500/30 transition-colors">
              <SiPython />
            </div>
            <div className="absolute bottom-[20%] right-[15%] text-red-400/20 text-6xl animate-[spin_15s_linear_infinite] hover:text-red-400/40 transition-colors">
              <DiTerminal />
            </div>
          </>
        ) : (
          /* Developer Mode: Next.js, React, Tailwind, Node.js ikonkalari */
          <>
            <div className="absolute top-[12%] left-[12%] text-slate-400/20 text-7xl animate-[spin_25s_linear_infinite] hover:text-slate-400/40 transition-colors">
              <SiNextdotjs />
            </div>
            <div className="absolute top-[18%] right-[15%] text-sky-400/25 text-7xl animate-[spin_12s_linear_infinite] hover:text-sky-400/50 transition-colors">
              <SiReact />
            </div>
            <div className="absolute bottom-[22%] left-[14%] text-teal-400/25 text-5xl animate-[bounce_7s_ease-in-out_infinite] hover:text-teal-400/40 transition-colors">
              <SiTailwindcss />
            </div>
            <div className="absolute bottom-[28%] right-[10%] text-green-500/20 text-6xl animate-[pulse_4s_infinite] hover:text-green-500/40 transition-colors">
              <SiNodedotjs />
            </div>
          </>
        )}
      </div>

      {/* ================= MAIN CONTENT CONTAINER ================= */}
      <div className="relative z-10 transition-all duration-500">
        
        {/* Dynamic Operational Status Badge */}
        <div className={`inline-flex items-center gap-2 text-[10px] font-black tracking-widest uppercase mb-8 px-3 py-1.5 rounded border border-dashed transition-all duration-500 ${
          isHackerMode 
            ? 'border-red-500/40 text-red-400 bg-red-500/5 shadow-[0_0_20px_rgba(239,68,68,0.15)]' 
            : 'border-blue-500/40 text-blue-400 bg-blue-500/5 shadow-[0_0_20px_rgba(59,130,246,0.15)]'
        }`}>
          <span className={`w-2 h-2 rounded-full relative flex`}>
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isHackerMode ? 'bg-red-500' : 'bg-blue-400'}`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${isHackerMode ? 'bg-red-500' : 'bg-blue-500'}`}></span>
          </span>
          {isHackerMode ? '⚠️ ROOT_ACCESS // PRIVILEGED_LOGGED' : '🚀 STABLE_BUILD // ACTIVE_PRODUCTION'}
        </div>

        {/* Terminal Context Indicator */}
        <p className="text-[11px] text-slate-500 mb-3 tracking-widest uppercase">
          {isHackerMode ? 'root@core_system:~# telemetry --live' : '// Runtime Execution Context'}
        </p>

        {/* Main Identity Name */}
        <h1 className={`text-5xl md:text-7xl font-black font-sans tracking-tight mb-4 text-white transition-all duration-500 ${
          isHackerMode ? 'hover:text-red-500 hover:drop-shadow-[0_0_25px_rgba(239,68,68,0.4)]' : 'hover:text-sky-400 hover:drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]'
        }`}>
          {PROFILE.name}
        </h1>

        {/* Subtitles & Operational Designations */}
        <h2 className="text-2xl md:text-4xl font-extrabold font-sans tracking-tight mb-8">
          {isHackerMode ? (
            <div className="flex flex-wrap justify-center items-center gap-2">
              <span className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.4)] animate-pulse">Systems Auditor</span>
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
        <p className={`text-xs md:text-sm mb-10 tracking-wide ${isHackerMode ? 'text-red-400/80' : 'text-blue-400/80'}`}>
          {isHackerMode ? (
            <>
              git commit -m <span className="underline font-bold text-red-500">"audit: isolate-network-sequences"</span>
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
        <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto mb-6 font-sans leading-relaxed tracking-wide">
          {PROFILE.description}
        </p>

        {/* Experience Timeframes Badges */}
        <p className={`text-xs md:text-sm mb-14 tracking-widest font-bold transition-all duration-500 ${isHackerMode ? 'text-red-500/60 drop-shadow-[0_0_8px_rgba(239,68,68,0.2)]' : 'text-blue-400/60'}`}>
          {isHackerMode 
            ? '⚡ AUTOMATED LAB PIPELINES & HARDWARE LAYER READY' 
            : '📦 ENTERPRISE SCALABILITY & ASYNC PIPELINES LOADED'
          }
        </p>

        {/* Primary Dynamic Call To Actions Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-20 relative z-20">
          <button className={`px-6 py-3 border text-[11px] font-black tracking-widest rounded transition-all duration-300 uppercase hover:scale-105 ${
            isHackerMode 
              ? 'border-red-500 text-red-400 bg-red-500/5 hover:bg-red-500 hover:text-black hover:shadow-[0_0_25px_rgba(239,68,68,0.5)]' 
              : 'border-blue-500 text-blue-400 bg-blue-500/5 hover:bg-blue-500 hover:text-white hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]'
          }`}>
            {isHackerMode ? './initialize_audit.sh' : 'compile projects'}
          </button>
          <button className={`px-6 py-3 border text-[11px] font-black tracking-widest rounded transition-all duration-300 bg-transparent uppercase hover:scale-105 ${
            isHackerMode
              ? 'border-slate-800 text-slate-500 hover:text-red-400 hover:border-red-500/40 shadow-inner'
              : 'border-slate-800 text-slate-400 hover:text-white hover:border-slate-600'
          }`}>
            {isHackerMode ? 'cat identity_signature.pem' : 'establish connection'}
          </button>
        </div>

        {/* Telemetry Metrics Grid */}
        <div className={`grid grid-cols-3 border divide-x max-w-2xl mx-auto rounded overflow-hidden bg-slate-950/60 backdrop-blur-md transition-all duration-500 hover:scale-[1.03] ${
          isHackerMode ? 'border-red-500/20 divide-red-500/20 shadow-[0_4px_24px_rgba(239,68,68,0.05)]' : 'border-slate-800 divide-slate-800 shadow-[0_4px_24px_rgba(59,130,246,0.05)]'
        }`}>
          
          {/* Metric Column 1 */}
          <div className="p-5 md:p-6 hover:bg-slate-900/40 transition duration-300">
            <div className={`text-2xl md:text-3xl font-black transition-colors duration-500 ${isHackerMode ? 'text-red-500' : 'text-blue-400'}`}>
              {isHackerMode ? '20+' : '30+'}
            </div>
            <div className="text-[9px] uppercase tracking-widest text-slate-500 font-black mt-1">
              {isHackerMode ? 'Lab Levels Completed' : 'Repository Deployments'}
            </div>
          </div>

          {/* Metric Column 2 */}
          <div className="p-5 md:p-6 relative hover:bg-slate-900/40 transition duration-300">
            <div className="text-2xl md:text-3xl font-black text-white">
              {isHackerMode ? '500+ /s' : '1.2k+'}
            </div>
            <div className="text-[9px] uppercase tracking-widest text-slate-500 font-black mt-1">
              {isHackerMode ? 'Data Streams Monitored' : 'GitHub Commits'}
            </div>
            <div className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border flex items-center justify-center text-[8px] animate-bounce ${
              isHackerMode ? 'border-red-500/30 text-red-400' : 'border-slate-800 text-slate-500'
            }`}>↓</div>
          </div>

          {/* Metric Column 3 */}
          <div className="p-5 md:p-6 hover:bg-slate-900/40 transition duration-300">
            <div className={`text-2xl md:text-3xl font-black transition-colors duration-500 ${isHackerMode ? 'text-emerald-400' : 'text-indigo-400'}`}>
              {isHackerMode ? 'POSIX OS' : 'MERN Stack'}
            </div>
            <div className="text-[9px] uppercase tracking-widest text-slate-500 font-black mt-1">
              {isHackerMode ? 'Analysis Platform' : 'Development Domain'}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}