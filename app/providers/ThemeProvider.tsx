// "use client";
// import { ReactNode, useState } from "react";
// import { ThemeContext } from "../contexts/ThemeContext";

// type Theme = "light" | "dark";

// interface Props {
//   children: ReactNode;
// }

// export const ThemeProvider = ({ children }: Props) => {
//   const [theme, setTheme] = useState<Theme>(() => {
//     const savedTheme = localStorage.getItem("theme");
//     return (savedTheme as Theme) || "dark";
//   });

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     console.log("______TOGGLE THEM", newTheme);

//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//   };

//   const value = { theme, toggleTheme };

//   return (
//     <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
//   );
// };

//ThemeContext.js
// source: https://plainenglish.io/blog/light-and-dark-mode-in-react-web-application-with-tailwind-css-89674496b942

"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  return "light"; // light theme as the default;
};

type ProviderValue = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const defaultContextValue: ProviderValue = {
  theme: getInitialTheme(),
  setTheme: () => {
    return;
  },
};
export const ThemeContext = createContext<ProviderValue>(defaultContextValue);

interface Props {
  initialTheme: string;
  children: ReactNode;
}
export const ThemeProvider = ({ initialTheme, children }: Props) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const rawSetTheme = (rawTheme: string) => {
    const root = window.document.documentElement;
    let isDark = rawTheme === "dark";

    if (rawTheme === "system") {
      isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(isDark ? "dark" : "light");

    localStorage.setItem("color-theme", rawTheme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
