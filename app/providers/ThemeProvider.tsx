"use client";
import { useEffect, useState } from "react";
import { Theme, ThemePanel } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { createContext } from "react";

type Theme = "light" | "dark";
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const defaultTheme: ThemeContextType = {
  theme: "dark",
  toggleTheme: () => {},
};
export const ThemeContext = createContext<ThemeContextType>(defaultTheme);

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem("theme");
    return (storedTheme as Theme) || "dark";
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Theme appearance={theme}>
        {children}
        {/* <ThemePanel /> */}
      </Theme>
    </ThemeContext.Provider>
  );
};
