import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import HeaderOrganisms from './UI/organisms/Header/HeaderOrganisms';
import Box from '@mui/material/Box';
const App = () => {
	return (
		<>
		<div className='App'>
			<BrowserRouter>
				<HeaderOrganisms />
				<Box />
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
