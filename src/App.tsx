import React, { useContext, useEffect } from 'react';
import './App.css';
import { ThemeContext, ThemeContexts } from './components/Theme';
import { NavbarC } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Outlet } from 'react-router-dom';
import { Home } from './components/Home';
import { Footer } from './components/Footer';

const App = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {setTheme(theme === "light" ? "dark" : "light")}

  const color = theme === "light" ? "#333" : "#FFF";
  const backgroundColor = theme === "light" ? "#FFF" : "#333";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;
  

  return (
    <>
    <NavbarC/>
{/*     <div className="row">
      <div>Hi friend!</div>
      <button onClick={() => toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
      </div> */}
    
    <div className='row d'>
      <Sidebar/>
      <div className='col-12'>
        <Home/>
      </div>
      <Footer/>
    </div>
    </>
  );
};

export default App;
