import { useEffect, useRef, useState } from "react";
import { useMode } from "../context/ModeContext";

const roles = ["Frontend Developer", "Backend Developer", "Cybersecurity Enthusiast", "Full-Stack Engineer"];

function useTypewriter(words, { type = 90, del = 45, hold = 1400 } = {}) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    let t;
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), hold);
    } else if (deleting && text === "") {
      t = setTimeout(() => {
        setDeleting(false);
        setI((p) => p + 1);
      }, del);
    } else {
      t = setTimeout(() => {
        setText((prev) =>
          deleting ? word.slice(0, prev.length - 1) : word.slice(0, prev.length + 1)
        );
      }, deleting ? del : type);
    }
    return () => clearTimeout(t);
  }, [text, deleting, i, words, type, del, hold]);

  return text;
}

export default function Hero() {
  const { isHack } = useMode();
  const typed = useTypewriter(roles);
  const avatarRef = useRef(null);

  // parallax tilt for the avatar orb
  useEffect(() => {
    const el = avatarRef.current;
    if (!el) return;
    const onMove = (e) => {
      const { innerWidth: w, innerHeight: h } = window;
      const rx = (e.clientY / h - 0.5) * -16;
      const ry = (e.clientX / w - 0.5) * 16;
      el.style.setProperty("--rx", `${rx}deg`);
      el.style.setProperty("--ry", `${ry}deg`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          {isHack ? (
            <div className="term-line">
              <span className="prompt">root@bakhromov</span>:<span className="path">~</span>$ whoami
            </div>
          ) : (
            <span className="hero-badge">
              <span className="dot" /> Available for work
            </span>
          )}

          <h1 className="hero-title">
            {isHack ? (
              <>
                <span className="glitch" data-text="Bakhromov">Bakhromov</span>
                <span className="cursor">_</span>
              </>
            ) : (
              <>
                Hi, I&apos;m <span className="gradient-text">Bakhromov</span>
              </>
            )}
          </h1>

          <div className="hero-role">
            {isHack && <span className="prompt">&gt; </span>}
            <span className="role-text">{typed}</span>
            <span className="cursor">|</span>
          </div>

          <p className="hero-desc">
            {isHack
              ? "// Building secure, fast web apps. Breaking things to understand how they work. Turning caffeine into clean code & exploits."
              : "I craft responsive, beautiful and functional web applications — and I love the security side of the web just as much as building it."}
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects" onClick={(e) => (e.preventDefault(), document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }))}>
              {isHack ? "./view_projects" : "View Projects"} <span>→</span>
            </a>
            <a className="btn btn-ghost" href="#contact" onClick={(e) => (e.preventDefault(), document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }))}>
              {isHack ? "./contact_me" : "Get in Touch"}
            </a>
          </div>

          <div className="hero-stats">
            <div><strong>15+</strong><span>Projects</span></div>
            <div><strong>8+</strong><span>Certificates</span></div>
            <div><strong>3+</strong><span>Years coding</span></div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-3d" ref={avatarRef}>
            <div className="ring ring-1" />
            <div className="ring ring-2" />
            <div className="ring ring-3" />
            <div className="avatar-core">
              <span className="avatar-mono">AB</span>
            </div>
            <span className="float-chip chip-a">{isHack ? "</>" : "React"}</span>
            <span className="float-chip chip-b">{isHack ? "nmap" : "Node"}</span>
            <span className="float-chip chip-c">{isHack ? "sudo" : "Python"}</span>
          </div>
        </div>
      </div>

      <a className="scroll-hint" href="#about" onClick={(e) => (e.preventDefault(), document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }))}>
        <span className="mouse"><span /></span>
        scroll
      </a>
    </section>
  );
}
