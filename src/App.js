import { Route, Routes, Navigate } from 'react-router-dom';

// pages
import AuthPage from './pages/auth';
import CancelOrder from './pages/cancel-order';
import CartPage from './pages/cart/index';
import DeliveryHistory from './pages/delivery-history';
import NotFound from './pages/not-found';
import OrderManagement from './pages/order-management';
import OrderTracking from './pages/order-tracking/index';
import StatisticalPage from './pages/statistical';
import ProfileStore from './pages/store/index';
import HomePage from './pages/index';
import ProductsPage from './pages/products'
import SearchResult from './pages/search-result'
import ProductDetail from './pages/product-detail'

// import PrivateRoute from './PriateRoute';
// scss
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './scss/_index.scss';

function App () {
	return (
		<div className='app'>
			{/* Start Router */}
			<Routes>
				<Route path='/auth/:name' element={<AuthPage />} />
				<Route path='/cancel-order' element={<CancelOrder />} />
				<Route path='/delivery-history' element={<DeliveryHistory />} />
				<Route path='/not-found' element={<NotFound />} />
				<Route path='/order-management' element={<OrderManagement />} />
				<Route path='/order-tracking' element={<OrderTracking />} />
				<Route path='/statistical/*' element={<StatisticalPage />} />
				<Route path='/' element={<HomePage />} />
				<Route path='/products' element={<ProductsPage />} />
				<Route path='/products/:productId' element={<ProductDetail />} />
				<Route path='/products/search/:keyWord' element={<SearchResult />} />
				{/* <Route path='/products/search' element={<ProductsPage />} />
				<Route path='/search/:keyWord' element={<SearchResult />} /> */}
				<Route path='/store/:name' element={<ProfileStore />} />
				<Route path='/cart' element={<CartPage />} />
				<Route path='*' element={<Navigate to='/not-found' />} />
			</Routes>
			{/* End Router */}
		</div>
	);
}

export default App;
