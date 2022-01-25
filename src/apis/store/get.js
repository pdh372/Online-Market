import axiosDotNet from '../rootDotNet';

class Get {
	getAll = async () => {
		return axiosDotNet.get('/store/get');
	};
	getById = async (id) => {
		return axiosDotNet.get(`/store/get/${id}`);
	};
}

export default new Get();
