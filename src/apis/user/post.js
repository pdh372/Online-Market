import axiosClient from '../root';

class Post {
	registerCustomer = (data) => {
		return axiosClient.post('/User/RegisterCustomer', data, {
			headers : {
				'x-auth-token' : 'token',
			},
		});
	};

	registerProvider = (data) => {
		return axiosClient.post('/Store/RegisterProvider', data, {
			headers : {
				'x-auth-token' : 'token',
			},
		});
	};

	loginUser = (data) => {
		return axiosClient.post('/User/LoginUser', data, {
			headers : {
				'x-auth-token' : 'token',
			},
		});
	};
}

export default new Post();
