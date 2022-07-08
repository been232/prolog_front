import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import HeaderOrganisms from './UI/organisms/Header/HeaderOrganisms';
import Box from '@mui/material/Box';
import MainPageOrganism from './UI/organisms/MainPage/MainPageOrganism';
import MainPage from './UI/pages/MainPage/MainPage';
import LayoutPage from './UI/pages/LayoutPage/LayoutPage';
const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <HeaderOrganisms />
          <Box />
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/Layout/*" element={<LayoutPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
