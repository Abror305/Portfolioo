import { useState } from "react";
import { useMode } from "../context/ModeContext";
import Reveal from "./Reveal";

const certs = [
  {
    name: "OSCP",
    full: "Offensive Security Certified Professional",
    issuer: "OffSec",
    cat: "security",
    status: "in-progress",
    icon: "🎯",
    code: "OSCP-2025",
    skills: ["Pentesting", "Privilege Esc", "Exploit Dev", "Report Writing"],
    blurb: "Hands-on offensive security: enumerate, exploit and pivot through hardened machines.",
    link: "https://www.offsec.com/courses/pen-200/",
  },
  {
    name: "eJPT",
    full: "Junior Penetration Tester",
    issuer: "INE / eLearnSecurity",
    cat: "security",
    status: "certified",
    icon: "🛡️",
    code: "EJPT-7F2A",
    skills: ["Recon", "Scanning", "Web Attacks", "Networking"],
    blurb: "Practical entry-level pentesting certification covering the full assessment workflow.",
    link: "https://security.ine.com/certifications/ejpt-certification/",
  },
  {
    name: "Security+",
    full: "CompTIA Security+",
    issuer: "CompTIA",
    cat: "security",
    status: "in-progress",
    icon: "🔐",
    code: "SEC+601",
    skills: ["Threats", "Cryptography", "IAM", "Risk"],
    blurb: "Foundational cybersecurity knowledge: threats, architecture and risk management.",
    link: "https://www.comptia.org/certifications/security",
  },
  {
    name: "CEH",
    full: "Certified Ethical Hacker",
    issuer: "EC-Council",
    cat: "security",
    status: "in-progress",
    icon: "👾",
    code: "CEH-v12",
    skills: ["Footprinting", "Malware", "Sniffing", "Evasion"],
    blurb: "Ethical hacking methodology across reconnaissance, scanning and exploitation phases.",
    link: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
  },
  {
    name: "Frontend Dev",
    full: "Frontend Software Engineer",
    issuer: "HackerRank",
    cat: "dev",
    status: "certified",
    icon: "🎨",
    code: "HR-FE-D2225",
    skills: ["React", "JavaScript", "CSS", "DOM"],
    blurb: "Verified frontend engineering skills assessment.",
    link: "https://www.hackerrank.com/certificates/iframe/d22259420867",
  },
  {
    name: "Backend Dev",
    full: "Backend (Node.js)",
    issuer: "HackerRank",
    cat: "dev",
    status: "certified",
    icon: "⚙️",
    code: "HR-BE-2E85",
    skills: ["Node.js", "REST", "APIs", "Async"],
    blurb: "Verified backend development assessment with Node.js.",
    link: "https://www.hackerrank.com/certificates/iframe/2e85bb751599",
  },
  {
    name: "Gen AI",
    full: "Introduction to Generative AI",
    issuer: "Google Cloud",
    cat: "dev",
    status: "certified",
    icon: "🤖",
    code: "GCP-GENAI",
    skills: ["LLMs", "Prompting", "Cloud", "ML"],
    blurb: "Fundamentals of generative AI and large language models on Google Cloud.",
    link: "https://coursera.org/share/5423be09af8d3d54d3c748f8fa6f02e0",
  },
  {
    name: "Risk Mgmt",
    full: "Investment Risk Management",
    issuer: "Coursera",
    cat: "dev",
    status: "certified",
    icon: "📊",
    code: "CRS-RISK",
    skills: ["Analysis", "Strategy", "Finance"],
    blurb: "Coursera specialization on managing investment risk.",
    link: "https://coursera.org/share/51f3c4af2b0aaf131c5539e0c2642c57",
  },
];

const filters = [
  { id: "all", label: "All" },
  { id: "security", label: "Security" },
  { id: "dev", label: "Development" },
];

export default function Certifications() {
  const { isHack } = useMode();
  const [filter, setFilter] = useState("all");
  const list = certs.filter((c) => filter === "all" || c.cat === filter);

  return (
    <section id="certs">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">{isHack ? "sudo unlock ./credentials" : "Credentials"}</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-sub">
            {isHack
              ? "// decrypting verified credentials — hover a card to reveal payload"
              : "A blend of offensive-security and software-engineering credentials. Hover to flip."}
          </p>
        </Reveal>

        <Reveal className="cert-filters">
          {filters.map((f) => (
            <button
              key={f.id}
              className={`cert-filter ${filter === f.id ? "active" : ""}`}
              onClick={() => setFilter(f.id)}
            >
              {isHack ? `--${f.label.toLowerCase()}` : f.label}
            </button>
          ))}
        </Reveal>

        <div className="cert-grid">
          {list.map((c, i) => (
            <Reveal key={c.name} delay={i * 70}>
              <div className={`cert-card ${c.cat === "security" ? "is-security" : "is-dev"}`}>
                <div className="cert-inner">
                  {/* FRONT */}
                  <div className="cert-face cert-front">
                    <div className="cert-top">
                      <span className="cert-icon">{c.icon}</span>
                      <span className={`cert-status st-${c.status}`}>
                        {c.status === "certified"
                          ? isHack ? "VERIFIED" : "Certified"
                          : isHack ? "DECRYPTING" : "In Progress"}
                      </span>
                    </div>
                    <h3 className="cert-name">{c.name}</h3>
                    <p className="cert-full">{c.full}</p>
                    <div className="cert-foot">
                      <span className="cert-issuer">{c.issuer}</span>
                      <span className="cert-code">{c.code}</span>
                    </div>
                    {c.cat === "security" && <span className="cert-shield">SEC</span>}
                  </div>

                  {/* BACK */}
                  <div className="cert-face cert-back">
                    <p className="cert-blurb">{isHack ? `> ${c.blurb}` : c.blurb}</p>
                    <div className="cert-skills">
                      {c.skills.map((s) => (
                        <span key={s} className="cert-skill">{isHack ? `[${s}]` : s}</span>
                      ))}
                    </div>
                    <a
                      className="btn btn-primary cert-verify"
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {isHack ? "./verify" : "Verify"} <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
