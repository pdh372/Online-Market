//import axiosDotNet from '../rootDotNet';
import originService from 'helpers/originService';
import axiosJava from '../rootJava';

class Get {
	getProducts = async () => {
		return await axiosJava.get('/products');
	};

	getProductById = async (id) => {
		let data = await axiosJava.get('/products/' + id);
		data.product.origin = originService.getOrigin();
		return data;
	};

	getProductByKeyWord = async (key) => {
		return await axiosJava.get('/products/search/' + key);
	}

	getProductByStore = async (id) => {
		return await axiosJava.get('/products?store=' + id);
	}

}

export default new Get();
