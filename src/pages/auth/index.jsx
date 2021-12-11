import React from 'react';
import './authPage.scss';
import { useParams, Navigate } from 'react-router-dom';
import Login from '../../components/features/auth/login/Login';
import ForgetPassword from '../../components/features/auth/forgetPassword/ForgetPassword';
import RegisterCustomer from '../../components/features/auth/registerCustomer/RegisterCustomer';
import RegisterProvider from '../../components/features/auth/registerProvider/RegisterProvider';

const AuthPage = () => {
	const params = useParams();

	console.log(params);

	const handleRouter = () => {
		if (params.name === 'login') {
			return <Login />;
		}
		else if (params.name === 'forgetpassword') {
			return <ForgetPassword />;
		}
		else if (params.name === 'registercustomer') {
			return <RegisterCustomer />;
		}
		else if (params.name === 'registerprovider') {
			return <RegisterProvider />;
		}
		else {
			return <Navigate to='not-found' />;
		}
	};

	return <div className='auth-page'>{handleRouter()}</div>;
};

export default AuthPage;
