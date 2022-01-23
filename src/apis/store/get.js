import axiosDotNet from '../rootDotNet';
import axiosJava from '../rootJava';

class Get {
	getAll = async () => {
		return axiosDotNet.get('/store/get');
	};
}

export default new Get();
