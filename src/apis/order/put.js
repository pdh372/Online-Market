import rootApi from '../rootJava';

class Put {
	destroyOrder = id => {
		return rootApi.put(`/users/userID/orders/${id}/status`, { name: 'canceled' });
	};
}

export default new Put();
