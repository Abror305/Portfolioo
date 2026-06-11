import { useMode } from "../context/ModeContext";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const facts = [
  { k: "Name", v: "Abror Bakhromov" },
  { k: "Role", v: "Full-Stack & Security" },
  { k: "Location", v: "Tashkent, UZ" },
  { k: "Status", v: "Open to work" },
];

export default function About() {
  const { isHack } = useMode();
  return (
    <section id="about">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">{isHack ? "cat ./about.md" : "Who I am"}</span>
          <h2 className="section-title">About Me</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-text">
            <p>
              I&apos;m a passionate developer who loves turning ideas into clean,
              responsive and secure web applications. My toolkit spans the full
              stack — from pixel-perfect React interfaces to robust Node.js APIs.
            </p>
            <p>
              {isHack
                ? "On the security side I enjoy CTFs, pentesting labs and understanding how systems break — so I can build them stronger."
                : "I'm equally fascinated by cybersecurity: I spend time in CTFs and labs, learning how to protect the apps I build."}
            </p>
            <div className="about-facts">
              {facts.map((f) => (
                <div key={f.k} className="fact">
                  <span className="fact-k">{isHack ? `${f.k.toLowerCase()}:` : f.k}</span>
                  <span className="fact-v">{f.v}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <TiltCard className="about-terminal card">
              <div className="term-bar">
                <span className="tb-dot r" />
                <span className="tb-dot y" />
                <span className="tb-dot g" />
                <span className="tb-title">bash — bakhromov</span>
              </div>
              <pre className="term-body">
{`$ whoami
> abror_bakhromov

$ cat skills.json
{
  "frontend": ["React", "Tailwind"],
  "backend":  ["Node.js", "Express"],
  "database": ["MongoDB", "SQL"],
  "security": ["Linux", "Burp", "nmap"]
}

$ status --now
[OK] building cool things ✔`}
              </pre>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
