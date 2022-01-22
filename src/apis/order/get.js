import rootApi from '../rootJava';
import dotNetApi from '../rootDotNet';

class Get {
	orderByStatusAndUserId = (status, userId) => {
		return rootApi.get('/orders/filterByStatusAndUserId', { params: { status, userId } });
	};

	// /order/FilterByStatusAndUserId/61b46287def70a3102757cf4/canceled
	orderByStatusAndUserId_DOTNET = (status, userId) => {
		return dotNetApi.get(`/order/FilterByStatusAndUserId/${userId}/${status}`);
	};

	orderByShipper = shipperId => {
		let id = shipperId ? shipperId : '61e6c63996db5613e2addf31';
		return rootApi.get('/orders/shipper/' + id);
	};
}

export default new Get();
