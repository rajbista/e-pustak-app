"use client";
import { useEffect, useState } from "react";
import { Theme, ThemePanel } from "@radix-ui/themes";
import { createContext } from "react";

import "@radix-ui/themes/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    return typeof window !== "undefined"
      ? (localStorage.getItem("theme") as Theme) || "dark"
      : "dark";
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newTheme);
      }
      return newTheme;
    });
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Theme accentColor="green" appearance={theme} radius="small">
        {children}
        {/* <ThemePanel /> */}
      </Theme>
    </ThemeContext.Provider>
  );
};
