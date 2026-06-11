import { useMode } from "../context/ModeContext";

export default function Footer() {
  const { isHack } = useMode();
  return (
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
  );
}
