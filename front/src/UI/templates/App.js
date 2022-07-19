import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import HeaderOrganisms from '../organisms/Header/HeaderOrganisms';
import BoardDetailPage from '../pages/BoardPage/BoardDetailPage';
import MainPage from '../pages/MainPage/MainPage';
import LayoutPage from '../pages/LayoutPage/LayoutPage';
import ControlledOpenSpeedDial from '../atoms/MainPage/ControlledOpenSpeedDial';
import LoginPopupPage from '../pages/LoginPopupPage';
import SignUpPage from '../pages/SignupPage';
import LayoutWritePage from '../pages/LayoutPage/LayoutWritePage';
import BoardWritePage from '../pages/BoardPage/BoardWritePage';

const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <HeaderOrganisms sx={{ marginBottom: 10 }} />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Layout/*" element={<LayoutPage />} />
            <Route path="/LayoutWrite/*" element={<LayoutWritePage />} />
            <Route path="/BoardDetail/*" element={<BoardDetailPage />} />
            <Route path="/BoardWrite/*" element={<BoardWritePage />} />
            <Route path="/sign/*" element={<SignUpPage />} />
            <Route path="/login/*" element={<LoginPopupPage />} />
            <Route path="/findID/*" element={<LoginPopupPage />} />
          </Routes>
          <ControlledOpenSpeedDial />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
