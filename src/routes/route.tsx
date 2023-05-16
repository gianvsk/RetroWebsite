import React from 'react';
import { BrowserRouter, Route, Routes, createBrowserRouter, useParams } from 'react-router-dom';
import {NavbarC} from '../components/Navbar';
import {Home} from '../components/Home';
import { Detail } from '../components/Detail';
import { MainC } from '../components/Main';
import { SearchC } from '../components/Search';
import { ThemeProvider } from 'react-bootstrap';
import App from '../App';
import { DetailCardC } from '../components/DetailCard';

export const Wrapper = () => {

return (
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="home" element={<Home/>}>
              <Route path=":id" element={<Detail/>}>
                <Route path="details" element={<DetailCardC/>}/>
              </Route>
          </Route>
          <Route path="search" element= {<SearchC/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
    );
  }