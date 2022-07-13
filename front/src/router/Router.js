import { Navigate } from 'react-router-dom';
import MainPage from '../UI/pages/MainPage/MainPage'


const routes = [
	{
		path: "/",
		element: <MainPage />,
		children: [

			{ path: "main", element: <MainPage />}
		 ],
   
	},

];

export default routes;