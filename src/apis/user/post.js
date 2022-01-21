import axiosDotNet from '../rootDotNet';
import axiosJava from '../rootJava'

class Post {
	registerCustomer = data => {
		return axiosDotNet.post('/user/registercustomer', data, {
			headers : {
				'x-auth-token' : 'token',
			},
		});
	};

	registerProvider = data => {
		return axiosDotNet.post('/store/registerprovider', data, {
			headers : {
				'x-auth-token' : 'token',
			},
		});
	};

	registerShipper = data => {
		return axiosJava.post('/shipper/registershipper', data, {
			headers : {
				'x-auth-token' : 'token',
			},
		});
	};

	loginUser = data => {
		return axiosDotNet.post('/user/loginuser', data, {
			headers : {
				'x-auth-token' : 'token',
			},
		});
	};
}

export default new Post();
