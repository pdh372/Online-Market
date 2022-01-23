import axiosDotNet from '../rootDotNet';

class Get {
	getAll = async () => {
		return axiosDotNet.get('/store/get');
	};
}

export default new Get();
