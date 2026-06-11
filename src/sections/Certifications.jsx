import React from "react";
import { 
  FaExternalLinkAlt, FaAward, FaCode, FaServer, FaUserCheck,
  FaTerminal, FaShieldAlt, FaNetworkWired, FaUserShield 
} from "react-icons/fa";

// useOutletContext o'rniga isHackerMode propini qabul qilamiz
export default function Projects({ isHackerMode }) {
  // isDark o'rniga isHackerMode'dan kelib chiqib ishlaymiz
  const activeHackerMode = isHackerMode;

  // ================= 1. DEVELOPER MODE DATA =================
  const devProjects = [
    {
      name: "TezBozor E-commerce",
      desc: "An optimized Uzbek e-commerce store utilizing React frontend and Node.js REST API with robust shopping features.",
      link: "https://tezbor.uz/ru",
      img: "/assets/TezBozor.png",
      tags: ["React", "Node.js", "PostgreSQL"],
      icon: <FaCode />
    },
    {
      name: "Unvibe Dashboard",
      desc: "Comprehensive admin dashboard and student educational panels, supporting secure authentication and database tracking.",
      link: "https://newuu.uz/",
      img: "/assets/Unvibe.png",
      tags: ["React", "Express", "MongoDB"],
      icon: <FaServer />
    },
    {
      name: "GacAion Market",
      desc: "Fast, interactive market portal with full product catalogs, built using modern JS stack.",
      link: "https://gacaionshop.vercel.app/",
      img: "/assets/Gac.png",
      tags: ["React", "Node.js", "Tailwind"],
      icon: <FaCode />
    },
    {
      name: "InternShip ",
      desc: "This portfolio! Showcasing my skills, work timeline, projects, and certifications in systems, development, and cybersecurity.",
      link: "https://www.virtualinternships.com/",
      img: "/assets/interns.png",
      tags: ["Vite", "React", "Tailwind CSS"],
      icon: <FaUserCheck />
    },
  ];

  const devCertificates = [
    {
      img: "/assets/soft.png",
      name: "Software Engineer Cert",
      desc: "HackerRank Front-End Software Engineer certificate.",
      link: "https://www.hackerrank.com/certificates/iframe/d22259420867",
    },
    {
      img: "/assets/coursera.png",
      name: "Investment Risk Mgmt",
      desc: "Coursera / Aileaders Risk Management credentials.",
      link: "https://coursera.org/share/51f3c4af2b0aaf131c5539e0c2642c57",
    },
    {
      img: "/assets/Google.png",
      name: "Intro to Generative AI",
      desc: "Google Cloud / Coursera AI foundational certification.",
      link: "https://coursera.org/share/5423be09af8d3d54d3c748f8fa6f02e0",
    },
    {
      img: "/assets/Node.png",
      name: "Backend Node.js Cert",
      desc: "HackerRank server-side engineering credentials.",
      link: "https://www.hackerrank.com/certificates/iframe/2e85bb751599",
    },
  ];

  // ================= 2. ROOT (HACKER) MODE DATA =================
  const hackerProjects = [
    {
      name: "Automated Linux CTF Engine",
      desc: "A deployment core engineered in Bash to build a localized 20-level progressive system simulation lab with dynamically generated logic challenges.",
      link: "#",
      img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=600&q=80",
      tags: ["Bash Core", "Linux Architecture", "Lab Provisioning"],
      icon: <FaTerminal />
    },
    {
      name: "Network Traffic Forensics Matrix",
      desc: "Deep packet inspection sequence handling optimized for protocol analysis, packet stream reassembly, and systematic network auditing.",
      link: "#",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
      tags: ["Wireshark", "PCAP Analysis", "TCP/ICMP Stream"],
      icon: <FaNetworkWired />
    },
    {
      name: "Hardware Interface Socket Layer",
      desc: "Low-level system micro-automation protocols written to map memory registers, socket connections, and hardware pipeline parameters.",
      link: "#",
      img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=600&q=80",
      tags: ["Python Syscall", "POSIX Layer", "Security Auditing"],
      icon: <FaShieldAlt />
    },
    {
      name: "State Session Telemetry Tracker",
      desc: "An isolated asynchronous application structure optimized with localized data structures to handle environment session tracking state rules.",
      link: "#",
      img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
      tags: ["Node.js Server", "JSON State", "Process Isolation"],
      icon: <FaServer />
    }
  ];

  const hackerCertificates = [
    {
      img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=400&q=80",
      name: "OffSec Certified Professional (OSCP)",
      desc: "Information Security certification validating strict offensive technical expertise and thorough target penetration testing pipelines.",
      link: "https://www.offsec.com/courses/pen-200/",
    },
    {
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80",
      name: "OffSec Dune Phantom Event Token",
      desc: "Official enterprise challenge validation token achieved during the live OffSec network simulation matrix audit.",
      link: "https://www.offsec.com/",
    },
    {
      img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=400&q=80",
      name: "OffSec Defense Analyst (OSDA)",
      desc: "Advanced live-monitoring credential certifying proficiency in systematic network defense logs and attack vector isolation.",
      link: "https://www.offsec.com/courses/soc-200/",
    },
    {
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80",
      name: "Adversarial Architecture Audit",
      desc: "Advanced telemetry signature proving capability in identifying structural perimeter logic flaws and boundary access bypasses.",
      link: "https://www.offsec.com/",
    },
  ];

  // Ma'lumotlarni tanlash
  const projects = activeHackerMode ? hackerProjects : devProjects;
  const certificates = activeHackerMode ? hackerCertificates : devCertificates;

  // Rejimga mos dizayn kartalari
  const cardBg = activeHackerMode
    ? "bg-black/50 border-red-500/20 text-slate-300 hover:border-red-500/40 hover:shadow-[0_8px_32px_0_rgba(239,68,68,0.15)]"
    : "glass-card text-white border-slate-800 hover:border-primary/40 hover:shadow-[0_8px_32px_0_rgba(147,51,234,0.15)] bg-slate-900/40";

  return (
    <div className={`min-h-[calc(100vh-4rem)] p-4 sm:p-6 md:p-12 transition-colors duration-700 font-mono ${
      activeHackerMode ? "bg-[#02040a] text-slate-300" : "bg-[#050914] text-white"
    }`}>
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* ================= PROJECTS SECTION ================= */}
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <div className="text-[10px] tracking-[0.3em] font-black text-slate-500 uppercase">// Deployment Registries</div>
            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-black font-sans tracking-tight transition-colors duration-500 ${
              activeHackerMode ? "text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]" : "text-sky-400"
            }`}>
              {activeHackerMode ? "System Laboratories & Audits" : "Completed Projects"}
            </h1>
            <p className="text-xs sm:text-sm opacity-80 max-w-xl mx-auto font-sans leading-relaxed">
              {activeHackerMode 
                ? "A production log of system automation configurations, localized kernel labs, and network traffic inspections."
                : "A curated list of scalable web applications, full-stack e-commerce platforms, and interactive interfaces."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className={`flex flex-col rounded-3xl overflow-hidden border backdrop-blur-md transition-all duration-500 transform hover:-translate-y-2 ${cardBg}`}
              >
                <div className="relative h-48 group overflow-hidden border-b border-slate-900/10">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                  />
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 bg-gradient-to-t from-black via-black/40 to-transparent`}>
                    <span className={`text-white text-xs font-bold flex items-center gap-1.5 px-3 py-1 rounded-lg ${
                      activeHackerMode ? "bg-red-600 shadow-[0_0_10px_#ef4444]" : "bg-sky-500/80"
                    }`}>
                      {project.icon} {activeHackerMode ? "Analyze Node" : "Live View"}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-between flex-1 p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className={`text-lg font-bold tracking-tight ${activeHackerMode ? 'text-red-400' : 'text-sky-400'}`}>{project.name}</h3>
                    <p className="text-xs sm:text-sm leading-relaxed opacity-85 line-clamp-3">{project.desc}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className={`text-[10px] font-bold px-2.5 py-0.5 rounded border ${
                          activeHackerMode 
                            ? 'border-red-500/20 bg-red-500/5 text-red-400/80' 
                            : 'border-sky-500/20 bg-sky-500/5 text-sky-400'
                        }`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-xs font-bold transition-colors hover:underline ${
                        activeHackerMode ? "text-red-400 hover:text-red-500" : "text-sky-400 hover:text-sky-300"
                      }`}
                    >
                      {activeHackerMode ? "Examine Parameters" : "Visit Platform"} <FaExternalLinkAlt size={11} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CERTIFICATIONS SECTION ================= */}
        <div className="space-y-10">
          <div className="text-center space-y-2">
            <div className="text-[10px] tracking-[0.3em] font-black text-slate-500 uppercase">// Security Signatures</div>
            <h2 className={`text-3xl sm:text-4xl font-black font-sans tracking-tight flex items-center justify-center gap-2 transition-colors duration-500 ${
              activeHackerMode ? "text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]" : "text-indigo-400"
            }`}>
              <FaAward className={activeHackerMode ? "text-emerald-400 animate-pulse" : "text-indigo-400 animate-pulse"} /> 
              {activeHackerMode ? "Cryptographic Telemetry" : "Verified Credentials"}
            </h2>
            <p className="text-xs sm:text-sm opacity-80 max-w-xl mx-auto font-sans">
              Professional training signatures and infrastructure control clearances.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, i) => (
              <div
                key={i}
                className={`flex flex-col rounded-3xl overflow-hidden border backdrop-blur-md transition-all duration-500 transform hover:-translate-y-2 ${cardBg}`}
              >
                <div className={`p-4 flex items-center justify-center h-40 border-b border-slate-800 ${
                  activeHackerMode ? "bg-black/60 filter brightness-75 contrast-125" : "bg-white"
                }`}>
                  <img
                    src={cert.img}
                    alt={cert.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                
                <div className="flex flex-col justify-between flex-1 p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className={`text-base font-bold tracking-tight ${activeHackerMode ? "text-slate-100" : ""}`}>{cert.name}</h3>
                    <p className="text-xs sm:text-sm opacity-85 leading-relaxed">{cert.desc}</p>
                  </div>
                  
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-xs font-bold transition-colors hover:underline ${
                      activeHackerMode ? "text-emerald-400 hover:text-emerald-500" : "text-sky-400 hover:text-indigo-400"
                    }`}
                  >
                    {activeHackerMode ? "Verify Hash Signature" : "View Credential"} <FaExternalLinkAlt size={11} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}