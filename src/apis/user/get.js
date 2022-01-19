//import axiosDotNet from '../rootDotNet';
import axiosJava from '../rootJava'

class Get {
	userStatus = async (role, status) => {
		return axiosJava.get('/user/'+role+'/statusregister/'+status);
	};

	shipperPending = data => {
		return axiosJava.get('/users/shipperpending', data);
	};

	shipper = async(userId) => {
		return axiosJava.get('/shipper/'+userId);
	}
}

export default new Get();