import { useMode } from "../context/ModeContext";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const projects = [
  {
    name: "TezBozor",
    desc: "Full e-commerce platform with a Node.js API and React storefront.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://tezbor.uz/ru",
    accent: "var(--grad-a)",
    emoji: "🛒",
  },
  {
    name: "Unvibe",
    desc: "University platform: admin dashboard, student pages & backend.",
    tags: ["React", "Express", "Dashboard"],
    link: "https://newuu.uz/",
    accent: "var(--grad-b)",
    emoji: "🎓",
  },
  {
    name: "GacAion Market",
    desc: "Sleek product marketplace built with React and a Node backend.",
    tags: ["React", "Node.js"],
    link: "https://gacaionshop.vercel.app/",
    accent: "var(--grad-c)",
    emoji: "🏬",
  },
  {
    name: "Portfolio",
    desc: "This very site — dual Dev / Hack themed personal portfolio.",
    tags: ["React", "Vite", "CSS3"],
    link: "#home",
    accent: "var(--accent-2)",
    emoji: "💻",
  },
];

export default function Projects() {
  const { isHack } = useMode();
  return (
    <section id="projects">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">{isHack ? "git log --projects" : "Selected work"}</span>
          <h2 className="section-title">Projects</h2>
        </Reveal>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <TiltCard className="project-tilt">
                <a
                  className="card project-card"
                  href={p.link}
                  target={p.link.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{ "--p-accent": p.accent }}
                >
                  <div className="project-thumb">
                    <span className="project-emoji">{p.emoji}</span>
                    <span className="project-index">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="project-body">
                    <h3>{isHack ? `> ${p.name}` : p.name}</h3>
                    <p>{p.desc}</p>
                    <div className="project-tags">
                      {p.tags.map((t) => (
                        <span key={t} className="tag">{isHack ? `#${t}` : t}</span>
                      ))}
                    </div>
                    <span className="project-link">
                      {isHack ? "open ↗" : "View project"} <span>↗</span>
                    </span>
                  </div>
                </a>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
