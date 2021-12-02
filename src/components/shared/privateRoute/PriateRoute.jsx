import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from '../features/auth/slice';
// import jwt_decode from 'jwt-decode';

const PrivateRoute = ({ children }) => {
	// const dispatch = useDispatch();
	// const auth = useSelector(state => state.auth);

	// const handleCheckAuth = () => {
	// 	if (auth.jwt) {
	// 		const { exp } = jwt_decode(auth.jwt);

	// 		if (Date.now() >= exp * 1000) {
	// 			dispatch(logout(''));
	// 			return <Navigate to='/auth/login' />;
	// 		}
	// 		else {
	// 			return children;
	// 		}
	// 	}
	// 	else {
	// 		return <Navigate to='/auth/login' />;
	// 	}
	// };

	// return <React.Fragment>{handleCheckAuth()}</React.Fragment>;
	return <React.Fragment>{children}</React.Fragment>;
};

export default PrivateRoute;
