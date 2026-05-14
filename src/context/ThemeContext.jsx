import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { flushSync } from "react-dom";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
    } catch {}
    return !window.matchMedia("(prefers-color-scheme: light)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch {}
  }, [dark]);

  const toggleTheme = useCallback(() => {
    if (!document.startViewTransition) {
      setDark((prev) => !prev);
      return;
    }
    document.startViewTransition(() => {
      flushSync(() => {
        setDark((prev) => !prev);
      });
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
