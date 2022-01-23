import axiosDotNet from '../rootDotNet';
import axiosJava from '../rootJava';
class Get {
	userStatus = async (role, status) => {
		return axiosJava.get('/user/'+role+'/statusregister/'+status);
	};

	userById = async (userId) => {
		return axiosDotNet.get('/user/get/' + userId)
	}

	shipperPending = data => {
		return axiosJava.get('/users/shipperpending', data);
	};

	providerPending = data => {
		return axiosDotNet.get('/user/providerpending', data);
	};

	shipper = async(userId) => {
		return axiosJava.get('/shipper/'+userId);
	}

	store = async(storeId) => {
		return axiosDotNet.get('/store/provider/'+storeId);
	}
}

export default new Get();
