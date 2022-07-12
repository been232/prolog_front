import { Navigate } from 'react-router-dom';

import SignUp from '../UI/organisms/signup/SignUp';
import LoginPopupPage from '../UI/pages/LoginPopupPage';
import SignUpLayout from '../UI/pages/SignupPage';


const routes = [
	{
		path: "/",
		element: <SignUpLayout />,
		children: [
			{ path: "", element: <LoginPopupPage />}
		 ],
   
	},

];

export default routes;