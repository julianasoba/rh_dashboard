import { createContext, useState,type ReactNode } from "react";

interface ThemeContextType  {
    theme: "light" | "dark";
    toggleTheme: () => void;
}


// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider =({children}: {children: ReactNode}) => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
  const saved = localStorage.getItem("theme") as "light" | "dark" | null;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = saved || (prefersDark ? "dark" : "light");

  document.documentElement.classList.toggle("dark", initial === "dark");

  return initial; 
});

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

