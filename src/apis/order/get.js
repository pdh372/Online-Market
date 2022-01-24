import rootApi from '../rootJava';
import dotNetApi from '../rootDotNet';

class Get {
	orderByStatusAndUserId = (status, userId) => {
		return rootApi.get('/orders/filterByStatusAndUserId', {
			params : { status, userId },
		});
	};

	// /order/FilterByStatusAndUserId/61b46287def70a3102757cf4/canceled
	orderByStatusAndUserId_DOTNET = (status, userId) => {
		return dotNetApi.get(`/order/FilterByStatusAndUserId/${userId}/${status}`);
	};

	// changeCurrentStatus = ({ orderId, currentStatus }) => {
	// 	return dotNetApi.get(`/order/changeStatus/${orderId}/${currentStatus}`);
	// };

	orderByShipper = shipperId => {
		let id = shipperId ? shipperId : '61e6c63996db5613e2addf31';
		return rootApi.get('/orders/shipper/' + id);
	};

	orderByStatus = status => {
		return dotNetApi.get(`/order/getbystatus/${status}`);
	};

	changeStatus = (orderId, currentStatus) => {
		return dotNetApi.get(`/order/changeStatus/${orderId}/${currentStatus}`);
	};

	orderById = orderId => {
		let id = orderId ? orderId : '61e6c63996db5613e2addf31';
		return rootApi.get('/orders/' + id);
	};

	getById = ({ storeId }) => {
		return dotNetApi.get(`/order/getById/${storeId}`);
	};
}

export default new Get();
