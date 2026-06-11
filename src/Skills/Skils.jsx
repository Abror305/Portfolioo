import React from 'react';

export function Skills({ isHackerMode }) {
  const tools = isHackerMode 
    ? ["Linux", "Nmap", "Wireshark", "Metasploit", "Burp Suite", "Bash", "Python OS"]
    : ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Redux", "WebSockets"];

  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-16 relative z-10">
      <div className="flex items-center gap-4 mb-8">
        <h2 className={`text-xs font-bold tracking-widest uppercase shrink-0 ${isHackerMode ? 'text-emerald-400' : 'text-blue-400'}`}>
          // Tech Stack & Toolset
        </h2>
        <div className={`h-px w-full ${isHackerMode ? 'bg-emerald-500/10' : 'bg-slate-800'}`}></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tools.map((tool, index) => (
          <div 
            key={index} 
            className={`p-4 border rounded bg-slate-950/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${
              isHackerMode 
                ? 'border-emerald-500/10 hover:border-emerald-500/40 text-emerald-400/90 shadow-hover' 
                : 'border-slate-800 hover:border-blue-500/40 text-slate-300'
            }`}
          >
            <div className="text-[10px] text-slate-600 mb-1">0{index + 1}.</div>
            <div className="text-sm font-bold tracking-wide">{tool}</div>
          </div>
        ))}
      </div>
    </section>
  );
}