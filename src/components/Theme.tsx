import React, { useContext, useState } from "react";
import { MyContext } from "../App";

export type Theme = "light" | "dark";

/* export type ThemeContexts = { theme: Theme; setTheme: Function };

export const ThemeContext = React.createContext<ThemeContexts>({} as ThemeContexts);

type IProps = {children: React.ReactNode} */

export const ThemeProviderr = (/* IProps */) => {

  const {theme, setTheme, toggleTheme} = useContext(MyContext)!;

  return (
    <>    
    <div className="big">
    <h1>Hi friend!</h1>
    <button onClick={() => (toggleTheme(),
                            console.log(theme))}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>    
    </div>

    </>
  );
};