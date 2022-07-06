import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import HeaderOrganisms from './UI/organisms/Header/HeaderOrganisms';
import Box from '@mui/material/Box';
import MainPageOrganism from './UI/organisms/MainPage/MainPageOrganism';
import MainPage from './UI/pages/MainPage/MainPage';
const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <HeaderOrganisms />
          <Box />
          <MainPage></MainPage>
          {/* <Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/product/*" element={<Product />}></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes> */}
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
