import { useState } from "react";
import { useMode } from "../context/ModeContext";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const socials = [
  { label: "Telegram", icon: "✈️", href: "https://t.me/FT_bakhromov" },
  { label: "GitHub", icon: "🐙", href: "https://github.com/Abror305" },
  { label: "Instagram", icon: "📸", href: "https://instagram.com/14.Bakhromovv" },
  { label: "Email", icon: "✉️", href: "mailto:Bakhromovv23@gmail.com" },
];

export default function Contact() {
  const { isHack } = useMode();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.message) return;
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">{isHack ? "./establish_connection" : "Say hello"}</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-sub">
            {isHack
              ? "// open a secure channel — I usually respond within 24h"
              : "Have a project or just want to chat? Drop me a message."}
          </p>
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-side">
            <p className="contact-lead">
              {isHack
                ? "Ping me on any channel below or send a packet through the form."
                : "I'm always open to new opportunities, collaborations and good conversations."}
            </p>
            <div className="socials">
              {socials.map((s) => (
                <a key={s.label} className="card social" href={s.href} target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">{s.icon}</span>
                  <span>{isHack ? s.label.toLowerCase() : s.label}</span>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <TiltCard max={6} scale={1.01} glare={false}>
              <form className="card contact-form" onSubmit={onSubmit}>
                <label>
                  <span>{isHack ? "name:" : "Name"}</span>
                  <input name="name" value={form.name} onChange={onChange} placeholder={isHack ? "enter name..." : "Your name"} required />
                </label>
                <label>
                  <span>{isHack ? "email:" : "Email"}</span>
                  <input type="email" name="email" value={form.email} onChange={onChange} placeholder={isHack ? "you@domain..." : "you@email.com"} />
                </label>
                <label>
                  <span>{isHack ? "message:" : "Message"}</span>
                  <textarea name="message" rows="4" value={form.message} onChange={onChange} placeholder={isHack ? "type payload..." : "Your message"} required />
                </label>
                <button className="btn btn-primary" type="submit">
                  {sent ? (isHack ? "[ packet sent ✔ ]" : "Message sent ✔") : isHack ? "./send" : "Send Message"}
                </button>
              </form>
            </TiltCard>
          </Reveal>
        </div>
      </div>

      <footer className="footer">
        <div className="container footer-inner">
          <span>
            {isHack ? "© 2025 root@bakhromov — all systems nominal" : "© 2025 Bakhromov. Built with React."}
          </span>
          <button className="to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            {isHack ? "cd ~" : "Back to top ↑"}
          </button>
        </div>
      </footer>
    </section>
  );
}
