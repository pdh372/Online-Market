import { Route, Routes, Navigate } from 'react-router-dom';

// pages
import AuthPage from './authPage/AuthPage';
import HomePage from './homePage/HomePage';
import NotFound from './notFound/NotFound';
import StatisticalPage from './statisticalPage/StatisticalPage';
// import PrivateRoute from './PriateRoute';
// scss
import '../scss/_index.scss';

function App () {
	return (
		<div className='app'>
			{/* Start Router */}
			<Routes>
				<Route path='/' element={<HomePage />} />

				{/* <Route path='/auth/*' element={<AuthPage />} /> */}

				<Route path='/404' element={<NotFound />} />

				<Route path='/auth/:name' element={<AuthPage />} />
				<Route path='/statistical/*' element={<StatisticalPage />} />

				<Route path='*' element={<Navigate to='/404' />} />
			</Routes>
			{/* End Router */}
		</div>
	);
}

export default App;
