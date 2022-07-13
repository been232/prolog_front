import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import HeaderOrganisms from '../organisms/Header/HeaderOrganisms';
import BoardDetailPage from '../pages/BoardPage/BoardDetailPage';
import MainPage from '../pages/MainPage/MainPage';
import LayoutPage from '../pages/LayoutPage/LayoutPage';
import ControlledOpenSpeedDial from '../atoms/MainPage/ControlledOpenSpeedDial';
<<<<<<< HEAD
import LoginPopupPage from '../pages/LoginPopupPage';
import SignUpPage from '../pages/SignUpPage';
=======
import BoardWritePage from '../pages/BoardPage/BoardWritePage';
>>>>>>> 0323e6b5701b8a689eb4022dadf33d5fffc6488a

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
<<<<<<< HEAD
            <Route path="/sign/*" element={<SignUpPage />}/>
            <Route path="/login/*" element={<LoginPopupPage />}/>
            <Route path="/findID/*" element={<LoginPopupPage />}/>
=======
            <Route path="/BoardWrite/*" element={<BoardWritePage />}/>
>>>>>>> 0323e6b5701b8a689eb4022dadf33d5fffc6488a
          </Routes>
          <ControlledOpenSpeedDial />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
