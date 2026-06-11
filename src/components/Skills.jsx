import { useMode } from "../context/ModeContext";
import Reveal from "./Reveal";

const groups = [
  {
    title: "Frontend",
    icon: "🎨",
    items: [
      { name: "React", level: 92 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind / CSS", level: 88 },
      { name: "HTML5", level: 95 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 82 },
      { name: "MongoDB", level: 80 },
      { name: "REST APIs", level: 86 },
    ],
  },
  {
    title: "Security",
    icon: "🛡️",
    items: [
      { name: "Linux", level: 84 },
      { name: "Burp Suite", level: 70 },
      { name: "Networking", level: 75 },
      { name: "Python", level: 78 },
    ],
  },
];

export default function Skills() {
  const { isHack } = useMode();
  return (
    <section id="skills">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">{isHack ? "ls ./skills" : "What I use"}</span>
          <h2 className="section-title">Skills &amp; Stack</h2>
        </Reveal>

        <div className="skills-grid">
          {groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 100}>
              <div className="card skill-card">
                <div className="skill-head">
                  <span className="skill-icon">{g.icon}</span>
                  <h3>{g.title}</h3>
                </div>
                <ul className="skill-list">
                  {g.items.map((it) => (
                    <li key={it.name}>
                      <div className="skill-row">
                        <span>{it.name}</span>
                        <span className="skill-pct">{it.level}%</span>
                      </div>
                      <div className="bar">
                        <i style={{ width: `${it.level}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
