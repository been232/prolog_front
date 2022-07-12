import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import HeaderOrganisms from '../organisms/Header/HeaderOrganisms';
import BoardDetailPage from '../pages/BoardDetailPage/BoardDetailPage';
import MainPage from '../pages/MainPage/MainPage';
import LayoutPage from '../pages/LayoutPage/LayoutPage';
import ControlledOpenSpeedDial from '../atoms/MainPage/ControlledOpenSpeedDial';

const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <HeaderOrganisms sx={{marginBottom : 10}}/>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Layout/*" element={<LayoutPage />}/>
            <Route path="/BoardDetail/*" element={<BoardDetailPage />}/>
          </Routes>
          <ControlledOpenSpeedDial />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
