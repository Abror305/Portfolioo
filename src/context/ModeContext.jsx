import { createContext, useContext, useEffect, useState } from "react";

const ModeContext = createContext(null);

const STORAGE_KEY = "portfolio-mode";

export function ModeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    if (typeof window === "undefined") return "dev";
    return localStorage.getItem(STORAGE_KEY) || "dev";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-mode", mode);
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const toggleMode = () => setMode((m) => (m === "dev" ? "hack" : "dev"));

  return (
    <ModeContext.Provider value={{ mode, isHack: mode === "hack", toggleMode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode must be used within ModeProvider");
  return ctx;
}
