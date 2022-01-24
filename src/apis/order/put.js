import rootApi from '../rootJava';

class Put {
	destroyOrder = id => {
		return rootApi.put(`/users/userID/orders/${id}/status`, { name: 'canceled' });
	};

	commissionOrder = id => {
		return rootApi.put('/orders/commission/'+id);
	};
}

export default new Put();
