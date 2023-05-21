import React, { useContext, useRef, useState } from "react";
import { MyContext } from "../App";
import { Button } from "react-bootstrap";

export type Theme = "light" | "dark";

/* export type ThemeContexts = { theme: Theme; setTheme: Function };

export const ThemeContext = React.createContext<ThemeContexts>({} as ThemeContexts);

type IProps = {children: React.ReactNode} */

export const ThemeProviderr = (/* IProps */) => {

  const {theme, setTheme, toggleTheme} = useContext(MyContext)!

  const [themeButton, setThemeButton] = useState('theme-button-dark')
  const [themeDiv, setThemeDiv] = useState('div-theme-dark')

  const changeButton = () => {
    setThemeButton(themeButton === 'theme-button-dark' ? 'theme-button-light' : 'theme-button-dark')
    setThemeDiv(themeButton === 'theme-button-dark' ? 'div-theme-light' : 'div-theme-dark')
  }

  return (
    <>    
    <div className={`big ${themeDiv}`}>
    <h1>Hi friend!</h1>
    <Button className={`${themeButton}`} onClick={() => (toggleTheme(),
                                                    changeButton(),
                            console.log(themeButton))}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </Button>    
    </div>

    </>
  );
};