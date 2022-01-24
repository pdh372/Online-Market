import axiosClient from 'apis/rootJava';
import axiosDotNet from 'apis/rootDotNet';

function post (orderInfo) {
	return axiosClient.post('/orders/add', orderInfo, {
		headers : {
			'x-auth-token' : 'token',
		},
	});
}

class Post {
	createOrder = async orderInfo => {
		console.log(orderInfo);
		return await axiosDotNet.post('/order/addOrder', orderInfo);
	};
}

export { Post };

export default post;
