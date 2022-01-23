//import axiosDotNet from '../rootDotNet';
import axiosJava from '../rootJava'

class Get {
	getProducts = async () => {
		return await axiosJava.get('/products');
	};

	getProductById = async (id) => {
		return await axiosJava.get('/products/' + id);
	}

	getProductByKeyWord = async (key) => {
		return await axiosJava.get('/products/search/' + key);
	}

	getProductByStore = async (id) => {
		return await axiosJava.get('/products?store=' + id);
	}

}

export default new Get();