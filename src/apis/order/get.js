import rootApi from '../rootJava';

class Get {
	orderByStatusAndUserId = (status, userId) => {
		return rootApi.get('/orders/filterByStatusAndUserId', { params: { status, userId } });
	};
}

export default new Get();
