import { useEffect, useState } from "react";
import { useMode } from "../context/ModeContext";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certs", label: "Certs" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { isHack, toggleMode } = useMode();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when clicking/tapping outside the navbar.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e) => {
      if (!e.target.closest(".nav-inner")) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a className="brand" href="#home" onClick={(e) => (e.preventDefault(), go("home"))}>
          <span className="brand-bracket">&lt;</span>
          <span className="gradient-text">Bakhromov</span>
          <span className="brand-bracket">/&gt;</span>
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <button
              key={l.id}
              className={`nav-link ${active === l.id ? "active" : ""}`}
              onClick={() => go(l.id)}
            >
              {isHack ? `~/${l.label.toLowerCase()}` : l.label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className={`mode-switch ${isHack ? "hack" : "dev"}`}
            onClick={toggleMode}
            aria-label="Toggle Dev / Hack mode"
            title={isHack ? "Switch to Dev Mode" : "Switch to Hack Mode"}
          >
            <span className="ms-label ms-dev">DEV</span>
            <span className="ms-label ms-hack">HACK</span>
            <span className="ms-knob">{isHack ? ">_" : "{ }"}</span>
          </button>

          <button
            className={`burger ${open ? "open" : ""}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
