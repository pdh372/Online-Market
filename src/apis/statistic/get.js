import rootApi from '../rootJava';

class Get {
	user = () => {
		return rootApi.get('statisticals/users');
	};

	product = () => {
		return rootApi.get('statisticals/products');
	};
}

export default new Get();
