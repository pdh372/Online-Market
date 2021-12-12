import axiosClient from '../root';

class Post {
	registerCustomer = (registerData) => {
		return axiosClient.post('/User/RegisterCustomer', registerData, {
			headers : {
				'x-auth-token' : 'token',
			},
		});
	};
}

export default new Post();
