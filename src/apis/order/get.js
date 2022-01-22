import rootApi from '../rootJava';

class Get {
	orderByStatusAndUserId = (status, userId) => {
		return rootApi.get('/orders/filterByStatusAndUserId', { params: { status, userId } });
	};

	orderByShipper = shipperId => {
		let id = shipperId ? shipperId : '61e6c63996db5613e2addf31';
		return rootApi.get('/orders/shipper/' + id);
	};
}

export default new Get();
