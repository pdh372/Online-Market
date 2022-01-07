//import axiosDotNet from '../rootDotNet';
import axiosJava from '../rootJava'

class Get {
	getProducts = async () => {
		return await axiosJava.get('/products');
	};

	getProductById = async (id) => {
		return await axiosJava.get('/products/' + id);
	}
}

export default new Get();