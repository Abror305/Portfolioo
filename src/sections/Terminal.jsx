import React, { useState, useEffect, useRef } from 'react';
import { TERMINAL_COMMANDS, TERMINAL_HELP } from '../constants.js';

export function TerminalSection({ isHackerMode }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { text: 'root@bakhromov:~$_ help', type: 'input' },
    ...TERMINAL_HELP
  ]);
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd) => {
    const upperCmd = cmd.toLowerCase();

    if (upperCmd === 'help') {
      return [{ text: 'Available commands:', type: 'header' }, ...TERMINAL_HELP];
    }
    if (TERMINAL_COMMANDS[upperCmd]) {
      return [{ text: TERMINAL_COMMANDS[upperCmd], type: 'out' }];
    }
    return [{ text: `bash: command not found: ${cmd}. Type 'help'`, type: 'err' }];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    if (cmd.toLowerCase() === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const response = handleCommand(cmd);
    const newEntries = [
      { text: `root@bakhromov:~$_ ${cmd}`, type: 'input' },
      ...response
    ];

    setHistory([...history, ...newEntries]);
    setInput('');
  };

  return (
    <section id="terminal" className="max-w-4xl mx-auto px-6 pb-24 relative z-10">
      <div className="flex items-center gap-3 mb-6">
        <div className={`h-px flex-1 ${
          isHackerMode ? 'bg-emerald-500/20' : 'bg-slate-800'
        }`}></div>
        <h3 className={`text-[11px] font-bold tracking-widest uppercase ${
          isHackerMode ? 'text-emerald-400/80' : 'text-blue-400/80'
        }`}>
          BASH -- INTERACTIVE TERMINAL
        </h3>
        <div className={`h-px flex-1 ${
          isHackerMode ? 'bg-emerald-500/20' : 'bg-slate-800'
        }`}></div>
      </div>

      <div className={`w-full rounded border flex flex-col h-[380px] bg-[#050914]/95 backdrop-blur-sm transition-all duration-300 ${
        isHackerMode
          ? 'border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.03)]'
          : 'border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.03)]'
      }`}>
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/30 border-b border-slate-900 select-none">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60"></span>
          </div>
          <span className="text-[10px] text-slate-500 tracking-wide font-mono">
            bakhromov@portfolio ~ zsh
          </span>
          <div className="w-8"></div>
        </div>

        {/* Terminal Output */}
        <div className="p-4 flex-1 overflow-y-auto font-mono text-xs space-y-2.5">
          {history.map((item, idx) => (
            <div key={idx} className="leading-relaxed">
              {item.type === 'input' && (
                <span className={isHackerMode ? 'text-emerald-400' : 'text-blue-400'}>
                  {item.text}
                </span>
              )}
              {item.type === 'header' && (
                <span className="text-yellow-500 font-bold">{item.text}</span>
              )}
              {item.type === 'cmd' && (
                <span className="text-slate-300">{item.text}</span>
              )}
              {item.type === 'out' && (
                <span className="text-slate-400 block pl-2 border-l border-slate-800">
                  {item.text}
                </span>
              )}
              {item.type === 'err' && (
                <span className="text-red-400 font-semibold">{item.text}</span>
              )}
            </div>
          ))}
          <div ref={containerRef} />
        </div>

        {/* Terminal Input */}
        <form
          onSubmit={handleSubmit}
          className="border-t border-slate-900/60 px-4 py-3 bg-slate-950/80 flex items-center gap-2"
        >
          <span className={`font-bold shrink-0 ${
            isHackerMode ? 'text-emerald-500' : 'text-blue-400'
          }`}>
            root@bakhromov:~$_
          </span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none p-0 focus:ring-0 font-mono text-xs text-slate-200"
            placeholder="Type a command..."
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>
    </section>
  );
}