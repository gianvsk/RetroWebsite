import React, { createContext, useContext, useEffect, useState } from 'react';
import './App.css';
import { NavbarC } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Outlet } from 'react-router-dom';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { ThemeProvider } from 'react-bootstrap';
import { ThemeProviderr } from './components/Theme';

interface MyContextType {
  theme: string,
  setTheme: React.Dispatch<React.SetStateAction<string>>,
  toggleTheme: () => void
}

export const MyContext = createContext<MyContextType | undefined>(undefined);

const App = () => {

  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {setTheme(theme === "light" ? "dark" : "light")}

  const contextValues: MyContextType = {
    theme,
    setTheme,
    toggleTheme
  }

  const color = theme === "light" ? "#333" : "#FFF";
  const backgroundColor = theme === "light" ? "#FFF" : "#333";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;  

  return (
    <>
    <MyContext.Provider value={contextValues}>
    <NavbarC/>
    <div className='row d'>
    <ThemeProviderr/>
      <Sidebar/>
      <div className='col-12'>
        <Home/>
      </div>
      <Footer/>
    </div>
    </MyContext.Provider>
    </>
  );
};

export default App;
