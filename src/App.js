import { Route, Routes, Navigate } from 'react-router-dom';

// pages
import AuthPage from './pages/auth';
import NotFound from './pages/notFound';
import HomePage from './pages/index';
import DeliveryHistory from './pages/delivery-history';
import OrderTracking from './pages/order-tracking/index';
import StatisticalPage from './pages/statistical';
// import PrivateRoute from './PriateRoute';
// scss
import './scss/_index.scss';

function App () {
	return (
		<div className='app'>
			{/* Start Router */}
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/404' element={<NotFound />} />

				<Route path='/auth/:name' element={<AuthPage />} />
				<Route path='/statistical/*' element={<StatisticalPage />} />
				<Route path='/order-tracking' element={<OrderTracking />} />
				<Route path='/delivery-history' element={<DeliveryHistory />} />

				<Route path='*' element={<Navigate to='/404' />} />
			</Routes>
			{/* End Router */}
		</div>
	);
}

export default App;
