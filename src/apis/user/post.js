import axiosDotNet from '../rootDotNet';
import axiosJava from '../rootJava'

class Post {
	registerCustomer = data => {
		return axiosDotNet.post('/User/RegisterCustomer', data, {
			headers : {
				'x-auth-token' : 'token',
			},
		});
	};

	registerProvider = data => {
		return axiosDotNet.post('/Store/RegisterProvider', data, {
			headers : {
				'x-auth-token' : 'token',
			},
		});
	};

	registerShipper = data => {
		return axiosJava.post('/Shipper/RegisterShipper', data, {
			headers : {
				'x-auth-token' : 'token',
			},
		});
	};

	loginUser = data => {
		return axiosDotNet.post('/User/LoginUser', data, {
			headers : {
				'x-auth-token' : 'token',
			},
		});
	};
}

export default new Post();
