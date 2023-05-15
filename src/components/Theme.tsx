import React, { useState } from "react";

export type Theme = "light" | "dark";

export type ThemeContexts = { theme: Theme; setTheme: Function };

export const ThemeContext = React.createContext<ThemeContexts>({} as ThemeContexts);

type IProps = {children: React.ReactNode}

export const ThemeProvider = ({children}: IProps) => {

  const [theme, setTheme] = useState<Theme>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}   
    </ThemeContext.Provider>
  );
};