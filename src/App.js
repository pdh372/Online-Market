import { Route, Routes, Navigate } from 'react-router-dom';

// pages
import AuthPage from './pages/auth';
import AdminPage from './pages/admin';
import CancelOrder from './pages/cancel-order';
import CartPage from './pages/cart/index';
import DeliveryHistory from './pages/delivery-history';
import NotFound from './pages/not-found';
import OrderManagement from './pages/order-management';
import OrderTracking from './pages/order-tracking/index';
import StatisticalPage from './pages/statistical';
import ProfileStore from './pages/store/index';
import UserProfile from 'pages/profile';
import EditUserProfile from 'pages/profile/editProfile';
import HomePage from './pages/index';
import ProductsPage from './pages/products';
import SearchResult from './pages/search-result';
import ProductDetail from './pages/product-detail';
import ApproveShipperDetail from './pages/admin/approve-shipper-detail';
import ApproveProviderDetail from './pages/admin/approve-provider-detail';
import RequestShipping from 'pages/request-shipping';
//import ProductDetail from './components/features/productDetail/ProductDetail'
// import PrivateRoute from './PriateRoute';
// scss
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './scss/_index.scss';
import StoreList from 'pages/store/storeList/storeList';
import AddProductPage from 'pages/products/addProduct';
import ProductsByStorePage from 'pages/products/productsByStore';
import EditProductPage from 'pages/products/editProduct';
import OrderDetailPage from 'pages/orderDetail';
import WaitShipperToShippingAndPaid from 'pages/waitShipperToShippingAndPaid';

function App () {
	return (
		<div className='app'>
			{/* Start Router */}
			<Routes>
				<Route path='/auth/:name' element={<AuthPage />} />
				<Route path='/admin/:name' element={<AdminPage />} />
				<Route path='/admin/approveshipper/:shipperId' element={<ApproveShipperDetail />} />
				<Route path='/admin/approveprovider/:storeId' element={<ApproveProviderDetail />} />
				<Route path='/cancel-order' element={<CancelOrder />} />
				<Route path='/delivery-history' element={<DeliveryHistory />} />
				<Route path='/not-found' element={<NotFound />} />
				<Route path='/order-management' element={<OrderManagement />} />
				<Route path='/order-tracking' element={<OrderTracking />} />
				<Route path='/request-shipping' element={<RequestShipping />} />
				<Route path='/orders/:orderId' element={<OrderDetailPage />} />
				<Route path='/statistical/*' element={<StatisticalPage />} />
				<Route path='/' element={<HomePage />} />
				<Route path='/products' element={<ProductsPage />} />
				<Route path='/products/by-store' element={<ProductsByStorePage />} />
				<Route path='/products/add' element={<AddProductPage />} />
				<Route path='/products/:productId' element={<ProductDetail />} />
				<Route path='/products/:productId/edit' element={<EditProductPage />} />
				<Route path='/products/search/:keyWord' element={<SearchResult />} />
				{/* <Route path='/products/search' element={<ProductsPage />} />
				<Route path='/search/:keyWord' element={<SearchResult />} /> */}
				<Route path='/store/:name' element={<ProfileStore />} />
				<Route path='/cart' element={<CartPage />} />
				<Route path='/profile' element={<UserProfile />} />
				<Route path='/profile/edit' element={<EditUserProfile />} />
				<Route path='/stores' element={<StoreList />} />
				<Route path='/wait-shipper-to-shipping-and-paid' element={<WaitShipperToShippingAndPaid />} />
				<Route path='*' element={<Navigate to='/not-found' />} />
			</Routes>
			{/* End Router */}
		</div>
	);
}

export default App;
