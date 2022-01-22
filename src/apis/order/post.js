import axiosClient from 'apis/rootJava';

function post(orderInfo) {
	return axiosClient.post('/orders/add', orderInfo, {
		headers: {
			'x-auth-token': 'token',
		},
	});
}

export default post;
