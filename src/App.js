import { Route, Routes, Navigate } from 'react-router-dom';

// pages
import AuthPage from './pages/auth';
import DeliveryHistory from './pages/delivery-history';
import NotFound from './pages/not-found';
import OrderManagement from './pages/order-management';
import OrderTracking from './pages/order-tracking/index';
import StatisticalPage from './pages/statistical';
import ProfileStore from './pages/store/index';
import UserProfile from 'pages/profile';
import EditUserProfile from 'pages/profile/editProfile';
import HomePage from './pages/index';
// import PrivateRoute from './PriateRoute';
// scss
import './scss/_index.scss';

function App () {
	return (
		<div className='app'>
			{/* Start Router */}
			<Routes>
				<Route path='/auth/:name' element={<AuthPage />} />
				<Route path='/delivery-history' element={<DeliveryHistory />} />
				<Route path='/not-found' element={<NotFound />} />
				<Route path='/order-management' element={<OrderManagement />} />
				<Route path='/order-tracking' element={<OrderTracking />} />
				<Route path='/statistical/*' element={<StatisticalPage />} />
				<Route path='/edit-profile' element={<EditProfile />} />
				<Route path='/' element={<HomePage />} />
				<Route path='/products' element={<ProductsPage />} />
				<Route path='/products/:productId' element={<ProductDetail />} />
				<Route path='/products/search/:keyWord' element={<SearchResult />} />
				{/* <Route path='/products/search' element={<ProductsPage />} />
				<Route path='/search/:keyWord' element={<SearchResult />} /> */}
				<Route path='/store/:name' element={<ProfileStore />} />
				<Route path='/cart' element={<CartPage />} />
				<Route path='/profile' element={ <UserProfile /> } />
				<Route path='/profile/edit' element={ <EditUserProfile /> } />
				<Route path='*' element={<Navigate to='/not-found' />} />
			</Routes>
			{/* End Router */}
		</div>
	);
}

export default App;
