import React from 'react';
import { CERTIFICATIONS, PROJECTS } from '../constants.js';

export function Certifications({ isHackerMode }) {
  return (
    <section id="certifications" className="max-w-4xl mx-auto px-6 py-20 relative z-10">
      {/* Section Title */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className={`text-xs font-bold tracking-widest uppercase shrink-0 ${
          isHackerMode ? 'text-emerald-400' : 'text-blue-400'
        }`}>
          // Credentials & Projects
        </h2>
        <div className={`h-px w-full ${
          isHackerMode ? 'bg-emerald-500/10' : 'bg-slate-800'
        }`}></div>
      </div>

      {/* Certifications */}
      <div className="mb-16">
        <h3 className={`text-lg font-bold mb-6 ${
          isHackerMode ? 'text-emerald-400' : 'text-blue-400'
        }`}>
          🏆 Certifications
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((cert, idx) => (
            <a
              key={idx}
              href={cert.link}
              className={`p-6 border rounded backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 group ${
                isHackerMode
                  ? 'border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40'
                  : 'border-blue-500/20 bg-blue-500/5 hover:border-blue-500/40'
              }`}
            >
              <div className={`text-sm font-bold mb-2 ${
                isHackerMode ? 'text-emerald-400' : 'text-blue-400'
              }`}>
                {cert.title}
              </div>
              <div className="text-xs text-slate-400 mb-3">{cert.issuer}</div>
              <div className={`text-xs font-mono ${
                isHackerMode ? 'text-emerald-500/60' : 'text-blue-500/60'
              }`}>
                {cert.year}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div>
        <h3 className={`text-lg font-bold mb-6 ${
          isHackerMode ? 'text-emerald-400' : 'text-blue-400'
        }`}>
          💼 Featured Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className={`p-6 border rounded backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                isHackerMode
                  ? 'border-emerald-500/20 bg-slate-950/40 hover:border-emerald-500/40'
                  : 'border-slate-800 bg-slate-950/40 hover:border-blue-500/40'
              }`}
            >
              <div className={`text-sm font-bold mb-2 ${
                isHackerMode ? 'text-emerald-400' : 'text-blue-400'
              }`}>
                {project.title}
              </div>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, tidx) => (
                  <span
                    key={tidx}
                    className={`text-[10px] px-2 py-1 rounded font-mono ${
                      isHackerMode
                        ? 'bg-emerald-500/10 text-emerald-400/70'
                        : 'bg-slate-800/50 text-slate-400'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.link}
                  className={`text-[10px] font-bold hover:underline ${
                    isHackerMode ? 'text-emerald-400' : 'text-blue-400'
                  }`}
                >
                  View Live →
                </a>
                <a
                  href={project.github}
                  className={`text-[10px] font-bold hover:underline ${
                    isHackerMode ? 'text-emerald-400' : 'text-blue-400'
                  }`}
                >
                  GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
